import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Landing from "./pages/Landing";
import { Box } from "@mui/material";
import MenuBar from "./components/MenuBar";

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
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/build" element={<OptInEditor />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
