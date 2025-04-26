import grapesjs from "grapesjs";
import gjsForms from "grapesjs-plugin-forms";
import gjsBasicBlocks from "grapesjs-blocks-basic";
import GjsEditor, { Canvas } from "@grapesjs/react";

import QueenOneBlocks from "../plugins/QueenOneBlocks";

export default function OptInEditor() {
  const onEditor = (editor) => {
    console.log("Editor loaded", { editor });
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={onEditor}
      options={{
        height: "100vh",
        storageManager: false,
      }}
      plugins={[
        (editor) => {
          gjsForms(editor, {
            blocks: ["label"],
          });
        },
        (editor) => {
          gjsBasicBlocks(editor, {
            blocks: ["text", "link", "image"],
          });
        },
        QueenOneBlocks,
      ]}
      waitReady
    />
  );
}
