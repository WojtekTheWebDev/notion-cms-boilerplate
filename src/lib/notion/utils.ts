import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const richTextToPlainText = (
  richText: RichTextItemResponse[]
): string => {
  return richText.map((textObj) => textObj.plain_text).join(" ");
};
