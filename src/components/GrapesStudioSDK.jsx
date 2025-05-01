import StudioEditor from "@grapesjs/studio-sdk/react";
import { layoutSidebarButtons } from "@grapesjs/studio-sdk-plugins";
import "@grapesjs/studio-sdk/style";
import QueenOneBlocks from "../plugins/QueenOneBlocks";
import supabase from "../utils/supabase";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

async function loadTemplates() {
  let { data, error } = await supabase
    .from("studio-sdk-templates")
    .select("id, name, data, author");
  console.log(data);
  if (error) return [];
  return data;
}

// TODO Refactor the opt in page
export default function GrapesStudioSDK({ id }) {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  return (
    <>
      <StudioEditor
        options={{
          storage: {
            type: "self",
            autosaveChanges: 5,
            onSave: async ({ editor, project }) => {
              const { error } = await supabase
                .from("studio-sdk-templates")
                .upsert({
                  id: id,
                  data: project,
                  css: editor.getCss(),
                  html: editor.getHtml(),
                })
                .select();

              if (error) {
                console.error("Error saving template");
                setOpenError(true);
              } else {
                setOpen(true);
              }
            },
            onLoad: async () => {
              if (!id) {
                return {
                  project: {
                    pages: [
                      { name: "Home", component: "<h1>New project</h1>" },
                    ],
                  },
                };
              }

              let { data: row, error } = await supabase
                .from("studio-sdk-templates")
                .select("data")
                .eq("id", id)
                .single();
              if (error) {
                console.error("Error loading template: ", id);
                setOpenError(true);
                return;
              }
              return {
                project: row.data,
              };
            },
          },
          licenseKey:
            "ece0f13592804ddeabde9b6c4c6fff4d6d1a2b519f3745aebffd2181ac46fc23",
          project: {
            type: "web",
          },
          templates: {
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
            // Template example from SDK docs
            (editor) =>
              editor.onReady(() => {
                if (id) return; // Don't show template modal if user is loading an existing project
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Saved!"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "white" }}
        >
          Save success!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        message="Saved!"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenError(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%", color: "white" }}
        >
          Error!
        </Alert>
      </Snackbar>
    </>
  );
}
