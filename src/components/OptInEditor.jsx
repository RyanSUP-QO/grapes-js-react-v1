import grapesjs from "grapesjs";
import GjsEditor, { Canvas } from "@grapesjs/react";
import { Grid } from "@mui/material";
import { BlocksProvider } from "@grapesjs/react";
import queenOneModal from "../plugins/queenOneModal";

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
        {
          id: "gjs-blocks-basic",
          src: "https://unpkg.com/grapesjs-blocks-basic",
        },
        queenOneModal,
      ]}
    >
      <Grid container spacing={0}>
        <Grid size={3}>
          <p>Left Toolbar</p>
        </Grid>
        <Grid size={6}>
          <Canvas />
        </Grid>
      </Grid>
    </GjsEditor>
  );
}
