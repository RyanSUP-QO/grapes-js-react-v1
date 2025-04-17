import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
// bubbleTheme.ts
import { createTheme } from "@mui/material/styles";

const qoTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fed044", // electric purple
    },
    secondary: {
      main: "#ff8c3e", // copper glow
    },
    background: {
      default: "#7918f2", // deep black-violet
      paper: "#7918f2", // lighter panel shade
    },
    text: {
      primary: "#fef2e2", // warm white
      secondary: "#e84aff", // magenta pop
    },
  },
  typography: {
    fontFamily: '"Barlow Semi Condensed", "Arial", sans-serif',
    fontWeightBold: 700,
    button: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={qoTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
