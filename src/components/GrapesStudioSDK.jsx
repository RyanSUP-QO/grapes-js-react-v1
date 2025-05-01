import StudioEditor from "@grapesjs/studio-sdk/react";
import { layoutSidebarButtons } from "@grapesjs/studio-sdk-plugins";
import "@grapesjs/studio-sdk/style";
import QueenOneBlocks from "../plugins/QueenOneBlocks";
import supabase from "../utils/supabase";

async function loadTemplates() {
  let { data, error } = await supabase
    .from("studio-sdk-templates")
    .select("id, name, data, author");
  console.log(data);
  if (error) return [];
  return data;
}

export default function GrapesStudioSDK() {
  return (
    <StudioEditor
      options={{
        licenseKey:
          "ece0f13592804ddeabde9b6c4c6fff4d6d1a2b519f3745aebffd2181ac46fc23",
        project: {
          type: "web",
        },
        templates: {
          // return empty array
          onLoad: loadTemplates,
        },
        i18n: {
          locales: {
            en: {
              templates: {
                notFound: "No templates found",
              },
            },
          },
        },
        plugins: [
          layoutSidebarButtons.init(),
          QueenOneBlocks,
          (editor) =>
            editor.onReady(() => {
              editor.runCommand("studio:layoutToggle", {
                id: "my-templates-panel",
                header: false,
                placer: {
                  type: "dialog",
                  title: "Choose a template for your project",
                  size: "l",
                },
                layout: {
                  type: "panelTemplates",
                  content: { itemsPerRow: 3 },
                  onSelect: ({ loadTemplate, template }) => {
                    loadTemplate(template);
                    editor.runCommand("studio:layoutRemove", {
                      id: "my-templates-panel",
                    });
                  },
                },
              });
            }),
        ],
      }}
    />
  );
}
