import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Sample() {
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [hidePanles, setHidePanels] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <AnimatePresence>
        {!hidePanles && (
          <>
            <motion.div
              initial={{ x: "0" }}
              animate={{ x: "0" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50vw",
                height: "100vh",
                backgroundColor: "#340043",
              }}
            />
            <motion.div
              initial={{ x: "0" }}
              animate={{ x: "0" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "50vw",
                height: "100vh",
                backgroundColor: "#340043",
              }}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(!selectedTemplate || selectedTemplate === 1) && (
          <motion.div
            onClick={() => {
              setSelectedTemplate(1);
              setTimeout(() => setHidePanels(true), 700); // delay until layout
              setTimeout(() => setSelectedTemplate(3), 700); // delay until layout finishes
            }}
            key={0}
            layout
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            style={{
              zIndex: 5,
              width: 300,
              height: 300,
              backgroundColor: "red",
            }}
          />
        )}
        {(!selectedTemplate || selectedTemplate === 2) && (
          <motion.div
            onClick={() => {
              setSelectedTemplate(2);
              setTimeout(() => setHidePanels(true), 700); // delay until layout finishes
              setTimeout(() => setSelectedTemplate(3), 700); // delay until layout finishes
            }}
            layout
            key={1}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            style={{
              zIndex: 5,
              width: 300,
              height: 300,
              backgroundColor: "blue",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sample;
