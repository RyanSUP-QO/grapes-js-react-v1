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
        const body = editor.DomComponents.getWrapper();
        body.set({ droppable: false, badgeable: false });
      }}
      options={{
        telemetry: false,
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
          ]
        },
        pluginsOpts: {
          [QueenOneBlocks]: {
            template,
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
        QueenOneBlocks,
      ]}
      waitReady
    />
  );
}
