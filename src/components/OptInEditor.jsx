import grapesjs from "grapesjs";
import GjsEditor, { Canvas } from "@grapesjs/react";
import OptInFormBuilder from "../plugins/OptInFormBuilder";
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
        // {
        //   id: "gjs-blocks-basic",
        //   src: "https://unpkg.com/grapesjs-blocks-basic",
        // },
        // OptInFormBuilder,
        QueenOneBlocks,
      ]}
      waitReady
    />
  );
}
