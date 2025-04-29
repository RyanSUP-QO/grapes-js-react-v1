import grapesjs from "grapesjs";
import gjsForms from "grapesjs-plugin-forms";
import gjsBasicBlocks from "grapesjs-blocks-basic";
import GjsEditor, { Canvas } from "@grapesjs/react";

import QueenOneBlocks from "../plugins/QueenOneBlocks";
import QueenOneTemplates from "../plugins/QueenOneTemplates";
import { useNavigate } from "react-router";
export default function OptInEditor({ id }) {
  const navigate = useNavigate();
  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={(editor) => {
        console.log("Editor loaded", { editor });
      }}
      options={{
        height: "100vh",
        // TODO Reimplement local storage saving?
        // ? How can I keep supabase storage AND local storage? https://grapesjs.com/docs/modules/Storage.html#extend-storage
        // Strategy will be to implement a local-supabase mixed storage manager.
        storageManager: {
          type: "supabase",
          autosave: false,
        },
        // This setting makes style changes specific to instances of components using an id selector.
        // selectorManager: {
        //   componentFirst: true,
        // },
        pluginsOpts: {
          [QueenOneTemplates]: {
            id,
            // handleSavingNewTemplate: (id) => navigate(`/build/${id}`),
          },
        },
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
        QueenOneTemplates,
        QueenOneBlocks,
      ]}
      waitReady
    />
  );
}
