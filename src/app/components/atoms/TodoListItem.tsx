import React from "react";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { renderRichText } from "@/lib/notion/richText";

interface TodoListItemProps {
  richText: RichTextItemResponse[];
  checked: boolean;
}

export const TodoListItem = ({ richText, checked }: TodoListItemProps) => {
  return (
    <div className="todo-list-item">
      <input type="checkbox" checked={checked} readOnly className="mr-2" />
      <span>{renderRichText(richText)}</span>
    </div>
  );
};
