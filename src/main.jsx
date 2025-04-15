import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { SelectTemplate } from "./components/motion_samples/SelectTemplate.jsx";
import Sample from "./components/motion_samples/SelectTemplateVTwo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/select" element={<SelectTemplate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
