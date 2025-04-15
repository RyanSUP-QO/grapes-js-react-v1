import { useState } from "react";
export const SelectTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        width: "50%",
        margin: "0 auto",
      }}
    >
      <AnimatePresence>
        {(!selectedTemplate || selectedTemplate === 1) && (
          <motion.div
            onClick={() => setSelectedTemplate(1)}
            key={0}
            layout
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            style={{ width: 300, height: 300, backgroundColor: "red" }}
          />
        )}
        {(!selectedTemplate || selectedTemplate === 2) && (
          <motion.div
            onClick={() => setSelectedTemplate(2)}
            layout
            key={1}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            style={{ width: 300, height: 300, backgroundColor: "blue" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
