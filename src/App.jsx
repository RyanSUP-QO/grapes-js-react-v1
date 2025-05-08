import { BrowserRouter, Routes, Route } from "react-router";
import { Box } from "@mui/material";
import MenuBar from "./components/MenuBar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <MenuBar />
        <AnimatedRoutes />
      </Box>
    </BrowserRouter>
  );
}

export default App;
