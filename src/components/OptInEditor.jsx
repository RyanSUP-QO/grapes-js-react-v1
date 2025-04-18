import grapesjs from "grapesjs";
import GjsEditor, { Canvas } from "@grapesjs/react";
import { Grid, Typography } from "@mui/material";
import { StylesProvider } from "@grapesjs/react";
import queenOneModal from "../plugins/queenOneModal";
import StyleManager from "./StyleManager";

export default function OptInEditor() {
  const onEditor = (editor) => {
    console.log("Editor loaded", { editor });
  };

  return (
    <GjsEditor
      // The 'scripts' property is where I can append michales script
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
          <Typography>
            This is where all the customization happens. Options for header,
            button, image.
          </Typography>
          <StylesProvider>
            {(props) => <StyleManager {...props} />}
          </StylesProvider>
        </Grid>
        <Grid size={9}>
          <Canvas />
        </Grid>
      </Grid>
    </GjsEditor>
  );
}
