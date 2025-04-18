import { useEffect, useRef, useState } from "react";
import { Slider, Typography, Box, TextField } from "@mui/material";

export default function LivePreviewEditor() {
  const iframeRef = useRef(null);
  const [opacity, setOpacity] = useState(0.7);
  const [modalTitle, setModalTitle] = useState(
    "Elevate Your Cocktails With 10% Off "
  );

  const handleSliderChange = (event, newValue) => {
    setOpacity(newValue);

    const frameDoc = iframeRef.current.contentDocument;
    const modalHost = frameDoc.querySelector(".queen-one-modal");

    if (modalHost && modalHost.shadowRoot) {
      const target = modalHost.shadowRoot.querySelector(".overlay");
      target.style["background-color"] = `rgba(0,0,0,${newValue})`;
    }
  };

  const handleModalTitleChange = (event) => {
    console.log("as", event.target.value);
    setModalTitle(event.target.value);

    const frameDoc = iframeRef.current.contentDocument;
    const modalHost = frameDoc.querySelector(".queen-one-modal");
    console.log(modalHost);

    if (modalHost && modalHost.shadowRoot) {
      const target = modalHost.shadowRoot.querySelector("#modal-title");
      console.log(target);
      target.innerText = event.target.value;
    }
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* RIGHT: Control Panel */}
      <Box width={400} p={2} sx={{ backgroundColor: "#7918f2" }}>
        <Typography fontWeight="bold" gutterBottom>
          Backdrop Opacity: {opacity}
        </Typography>
        <Slider
          value={opacity}
          min={0}
          max={1}
          step={0.1}
          onChange={handleSliderChange}
          aria-labelledby="opacity-slider"
        />
        <Typography fontWeight="bold" gutterBottom>
          Heading
        </Typography>
        <TextField
          sx={{ width: "100%" }}
          variant="filled"
          value={modalTitle}
          onChange={handleModalTitleChange}
        />
      </Box>
      {/* LEFT: Live HTML preview */}
      <iframe
        ref={iframeRef}
        src="/template.html"
        style={{ flex: 1, border: "none" }}
        title="Live Preview"
      />
    </div>
  );
}
