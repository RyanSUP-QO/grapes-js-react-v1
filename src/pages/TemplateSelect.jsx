import { Box, Typography } from "@mui/material";
import TemplateGrid from "../components/TemplateGrid";

export default function TemplateSelect() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="h1">CHOOSE A TEMPLATE</Typography>
      <TemplateGrid />
    </Box>
  );
}
