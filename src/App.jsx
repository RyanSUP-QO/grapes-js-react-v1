import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import "./style.css";
import Sample from "./components/motion_samples/SelectTemplateVTwo";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="./image.png"
        style={{
          width: "25%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Sample />
    </div>
  );
}

export default App;
