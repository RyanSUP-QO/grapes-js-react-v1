import StudioEditor from "@grapesjs/studio-sdk/react";
import { layoutSidebarButtons } from "@grapesjs/studio-sdk-plugins";
import "@grapesjs/studio-sdk/style";
import InputListPanel from "./InputListPanel";
import ListSelection from "../plugins/ListSelection";
import QueenOneBlocks from "../plugins/QueenOneBlocks";
import starterTemplates from "../plugins/QueenOneBlocks/templates";
import extractFormDataFromGrapes from "../utils/extractFormDataFromGrapes";

function addListsAndTriggersToSidebarButtons(
  sidebarButtons,
  createSidebarButton
) {
  return [
    ...sidebarButtons,
    createSidebarButton({
      id: "lists",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0z"/></svg>',
      label: "Lists",
      layoutComponent: {
        type: "custom",
        component: InputListPanel,
      },
    }),
    createSidebarButton({
      id: "triggers",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/></svg>',
      label: "Triggers",
      layoutComponent: {
        type: "custom",
        component: InputListPanel,
      },
    }),
  ];
}

export default function GrapesStudioSDK() {
  return (
    <>
      <StudioEditor
        options={{
          theme: "dark",
          licenseKey:
            "ece0f13592804ddeabde9b6c4c6fff4d6d1a2b519f3745aebffd2181ac46fc23",
          project: {
            type: "web",
          },
          pages: {
            settings: false,
          },
          storage: {
            type: "self",
            autosaveChanges: 5, // save after every 5 changes

            onSave: async ({ project, editor }) => {
              extractFormDataFromGrapes(project, editor);
            },

            onLoad: async () => {
              return {
                project: {
                  pages: [
                    {
                      name: "Step 1",
                      component: starterTemplates["single-column"],
                    },
                  ],
                },
              };
            },
          },
          plugins: [
            layoutSidebarButtons.init({
              sidebarButton({ id, buttonProps, createSidebarButton }) {
                if (id === "panelPagesLayers") {
                  return createSidebarButton({
                    label: "Steps & Layers",
                    layoutComponent: {
                      type: "panelPagesLayers",
                      panelPagesProps: {
                        header: { label: "Steps" },
                      },
                    },
                  });
                } else if (id === "panelGlobalStyles") {
                  return null;
                } else {
                  return buttonProps;
                }
              },
              sidebarButtons({ sidebarButtons, createSidebarButton }) {
                return addListsAndTriggersToSidebarButtons(
                  sidebarButtons,
                  createSidebarButton
                );
              },
            }),
            QueenOneBlocks,
            ListSelection,
          ],
        }}
      />
    </>
  );
}
