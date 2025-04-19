import grapesjs from "grapesjs";
import GjsEditor, { Canvas } from "@grapesjs/react";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import { StylesProvider, LayersProvider } from "@grapesjs/react";
import queenOneModal from "../plugins/queenOneModal";
import StyleManager from "./StyleManager";
import loadTemplatePlugin from "../plugins/loadTemplatePlugin";
import { useState } from "react";
import LayerManager from "./LayerManager";

export default function OptInEditor() {
  const [selectedTab, setSelectedTab] = useState(0);
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
        // queenOneModal,
        loadTemplatePlugin,
      ]}
    >
      <Grid container spacing={0}>
        <Grid size={3}>
          <Tabs
            value={selectedTab}
            onChange={(_, v) => setSelectedTab(v)}
            variant="fullWidth"
          >
            <Tab label="Style" />
            <Tab label="Layers" />
          </Tabs>
          {selectedTab === 0 && (
            <StylesProvider>
              {(props) => <StyleManager {...props} />}
            </StylesProvider>
          )}
          {selectedTab === 1 && (
            <LayersProvider>
              {(props) => <LayerManager {...props} />}
            </LayersProvider>
          )}
        </Grid>
        <Grid size={9}>
          <Canvas />
        </Grid>
      </Grid>
    </GjsEditor>
  );
}
