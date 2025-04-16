import { Box } from "@mui/material";
import TriggerCard from "../components/TriggerCard";
import { useState } from "react";
import TemplateSelectDialog from "../components/TemplateSelectDialog";

export default function Landing() {
  const [showTemplateSelect, setShowTemplateSelect] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <TriggerCard onClick={() => setShowTemplateSelect(true)} />
      </Box>
      <TemplateSelectDialog
        open={showTemplateSelect}
        onClose={() => setShowTemplateSelect(false)}
      />
    </>
  );
}
