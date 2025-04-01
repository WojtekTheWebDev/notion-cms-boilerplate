import React from "react";
import {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { getNotionClient } from "./client";
import { getPropertyValue, PageProperties } from "./page";

export const richTextToPlainText = (
  richText: RichTextItemResponse[]
): string => {
  return richText.map((textObj) => textObj.plain_text).join(" ");
};

const renderEquation = (textObj: RichTextItemResponse, index: number) => {
  if (textObj.type !== "equation") {
    return null;
  }
  const key = `${textObj.equation.expression}-${index}`;
  const expression = textObj.equation.expression;
  return (
    <span key={key} className="equation">
      {expression}
    </span>
  );
};

const renderMention = async (textObj: RichTextItemResponse, index: number) => {
  if (textObj.type !== "mention") {
    return null;
  }
  const mentionType = textObj.mention.type;
  if (mentionType !== "page") {
    console.warn(
      `Unsupported mention type: ${mentionType}. Only page mentions are supported.`
    );
    return null;
  }
  const client = getNotionClient();
  const pageId = textObj.mention.page.id;
  const pageTitle = textObj.plain_text;
  const page = await client.pages.retrieve({ page_id: pageId });
  if (!page || page.object !== "page" || !("properties" in page)) {
    return null;
  }
  const pageSlug = getPropertyValue(page.properties, PageProperties.Slug);
  if (!pageSlug) {
    return null;
  }
  const key = `${pageSlug}-${index}`;
  return (
    <a key={key} href={`/${pageSlug}`} target="_self">
      {pageTitle}
    </a>
  );
};

const renderLink = (textObj: RichTextItemResponse, index: number) => {
  if (!textObj.href) {
    return null;
  }
  const key = `${textObj.href}-${index}`;
  const href = textObj.href;
  const text = textObj.plain_text;
  return (
    <a key={key} href={href} target="_blank">
      {text}
    </a>
  );
};

export const renderRichText = async (richText: RichTextItemResponse[]) => {
  if (!richText || richText.length === 0) {
    return <>&nbsp;</>;
  }

  return await Promise.all(
    richText.map(async (textObj, index) => {
      if (textObj.type === "equation") {
        return renderEquation(textObj, index);
      }

      if (textObj.type === "mention") {
        return await renderMention(textObj, index);
      }

      if (textObj.href) {
        return renderLink(textObj, index);
      }

      const key = `${textObj.plain_text}-${index}`;
      const text = textObj.plain_text;
      const annotations = textObj.annotations;
      const classNames = [];

      if (annotations.bold) {
        classNames.push("font-bold");
      }

      if (annotations.italic) {
        classNames.push("italic");
      }

      if (annotations.strikethrough) {
        classNames.push("line-through");
      }

      if (annotations.underline) {
        classNames.push("underline");
      }

      if (annotations.code) {
        classNames.push("code");
      }

      if (annotations.color) {
        const isBackground = annotations.color.includes("background");
        const colorClassName = isBackground
          ? `bg-notion-${annotations.color.split("_")[0]}`
          : `text-notion-${annotations.color}`;
        classNames.push(colorClassName);
      }

      const className = classNames.join(" ");
      return (
        <span key={key} className={className}>
          {text}
        </span>
      );
    })
  );
};

export const getIconString = (icon: PageObjectResponse["icon"]): string => {
  if (!icon) return "";

  switch (icon.type) {
    case "emoji":
      return icon.emoji;
    case "external":
      return icon.external.url;
    case "file":
      return icon.file.url;
    default:
      return "";
  }
};
