import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import React from "react";

const TipTap = ({ onDataChange, rules }) => {
  const editor = useEditor({
    content: rules,
    extensions: [Document, Text, StarterKit],
    editorProps: {
      attributes: {
        class:
          "block w-full rounded-md border-0 py-1.5  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black bg-white p-3 pl-4",
      },
    },
    onUpdate: ({ editor }) => {
      const rules = editor.getHTML();
      onDataChange(rules);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};

export default TipTap;
