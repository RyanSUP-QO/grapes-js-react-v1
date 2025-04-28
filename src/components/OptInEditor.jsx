import grapesjs from "grapesjs";
import gjsForms from "grapesjs-plugin-forms";
import gjsBasicBlocks from "grapesjs-blocks-basic";
import GjsEditor, { Canvas } from "@grapesjs/react";

import QueenOneBlocks from "../plugins/QueenOneBlocks";
import { useSearchParams } from "react-router";

export default function OptInEditor({ id }) {
  const [searchParams] = useSearchParams();
  const template = searchParams.get("template");
  const localStorageKey = `qo-${id}`;

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={(editor) => {
        console.log("Editor loaded", { editor });
      }}
      options={{
        height: "100vh",
        storageManager: {
          type: "local",
          autosave: true,
          autoload: true,
          stepsBeforeSave: 1,
          options: {
            local: {
              key: localStorageKey,
            },
          },
        },
        // This setting makes style changes specific to instances of components using an id selector.
        // selectorManager: {
        //   componentFirst: true,
        // },
        pluginsOpts: {
          [QueenOneBlocks]: {
            template,
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
        QueenOneBlocks,
      ]}
      waitReady
    />
  );
}
