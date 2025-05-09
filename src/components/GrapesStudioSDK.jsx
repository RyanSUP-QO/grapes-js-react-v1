import StudioEditor from "@grapesjs/studio-sdk/react";
import { layoutSidebarButtons } from "@grapesjs/studio-sdk-plugins";
import "@grapesjs/studio-sdk/style";
import InputListPanel from "../plugins/ListSelection/InputListPanel";
import ListSelection from "../plugins/ListSelection";
import QueenOneBlocks from "../plugins/QueenOneBlocks";
import extractFormDataFromGrapes from "../utils/extractFormDataFromGrapes";
import { formDemo } from "../utils/demoFormsOutput";
import { useParams } from "react-router";
import { getOptin, updateOptin } from "../api/api";
import ListSidebarButtonConfig from "../plugins/ListSelection/ListSidebarButtonConfig";

function addListsAndTriggersToSidebarButtons(
  sidebarButtons,
  createSidebarButton
) {
  return [
    ...sidebarButtons,
    createSidebarButton(ListSidebarButtonConfig),
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
  const { siteId, id } = useParams();
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
              console.log(project);
              const data = extractFormDataFromGrapes(project, editor);
              await updateOptin(siteId, data);
            },
            onLoad: async () => {
              const project = await getOptin(siteId, id);
              if (!project.optin.grapesProjectData) {
                return {
                  project: JSON.parse(formDemo.grapesProjectData),
                };
              }
              const grapesProjectData = JSON.parse(
                project.optin.grapesProjectData
              );
              return {
                project: grapesProjectData,
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
