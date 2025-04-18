import { Box, Typography } from "@mui/material";
import TemplateGrid from "../components/TemplateGrid";
import { useNavigate } from "react-router";

export default function TemplateSelect() {
  const navigate = useNavigate();
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
      <TemplateGrid onTemplateSelect={() => navigate("/build")} />
    </Box>
  );
}
