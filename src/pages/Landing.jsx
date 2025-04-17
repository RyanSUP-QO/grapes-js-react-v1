import { Box } from "@mui/material";
import TriggerCard from "../components/TriggerCard";
import { useState } from "react";

import TemplateGrid from "../components/TemplateGrid";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);
export default function Landing() {
  const [showTemplateSelect, setShowTemplateSelect] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <AnimatePresence mode="wait">
        {showTemplateSelect ? (
          <motion.section
            key="a"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TemplateGrid />
          </motion.section>
        ) : (
          <motion.section
            key="b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <TriggerCard onClick={() => setShowTemplateSelect(true)} />
          </motion.section>
        )}
      </AnimatePresence>
    </Box>
  );
}
