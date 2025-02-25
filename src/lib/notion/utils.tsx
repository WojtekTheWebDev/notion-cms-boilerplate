import React from "react";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const richTextToPlainText = (
  richText: RichTextItemResponse[]
): string => {
  return richText.map((textObj) => textObj.plain_text).join(" ");
};

export const renderRichText = (richText: RichTextItemResponse[]) => {
  return richText.map((textObj, index) => {
    if (textObj.type === "equation") {
      const key = `${textObj.equation.expression}-${index}`;
      const expression = textObj.equation.expression;
      return <span key={key} className="equation">{expression}</span>;
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
  });
};
