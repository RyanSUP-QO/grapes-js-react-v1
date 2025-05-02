import grapesjs from "grapesjs";
import gjsForms from "grapesjs-plugin-forms";
import gjsBasicBlocks from "grapesjs-blocks-basic";
import GjsEditor from "@grapesjs/react";

import QueenOneBlocks from "../plugins/QueenOneBlocks";
import QueenOneTemplates from "../plugins/QueenOneTemplates";
export default function OptInEditor({ id }) {
  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={(editor) => {
        console.log("Editor loaded", { editor });
        const body = editor.DomComponents.getWrapper();
        body.set({ droppable: false, badgable: false, highlightable: false });
      }}
      options={{
        telemetry: false,
        height: "100vh",
        storageManager: {
          type: "supabase",
          autosave: false,
        },
        // mediaCondition: "min-width",
        deviceManager: {
          devices: [
            {
              name: "Desktop",
              width: "",
            },
            {
              name: "Mobile",
              width: "400px",
              widthMedia: "799px",
            },
          ],
        },
        layerManager: {
          root: ".container",
          sortable: true,
          showWrapper: false,
        },
        selectorManager: {
          // `componentFirst` makes style changes specific to instances of components using an id selector.
          // componentFirst: true,
          states: [
            {
              name: "hover",
              label: "Hover",
              pseudo: "hover",
            },
            {
              name: "active",
              label: "Click",
              pseudo: "active",
            },
            {
              name: "focus",
              label: "Focus",
              pseudo: "focus",
            },
            {
              name: "focus-visible",
              label: "Focus Visible",
              pseudo: "focus-visible",
            },
            {
              name: "visited",
              label: "Visited",
              pseudo: "visited",
            },
          ],
        },
        pluginsOpts: {
          [QueenOneTemplates]: {
            id,
          },
        },
      }}
      plugins={[
        (editor) => {
          gjsForms(editor, {
            // blocks: [],
            blocks: ["label"],
          });
        },
        (editor) => {
          gjsBasicBlocks(editor, {
            // blocks: ["text", "link", "image"],
            blocks: ["image"],
          });
        },
        QueenOneTemplates,
        QueenOneBlocks,
      ]}
      waitReady
    />
  );
}
