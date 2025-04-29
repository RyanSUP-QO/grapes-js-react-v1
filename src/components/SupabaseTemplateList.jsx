import { Button } from "@mui/material";
import { AnimatePresence } from "motion/react";
import SupabaseTemplateCard from "./SupabaseTemplateCard";
import { motion } from "motion/react";

const templateVariants = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

export default function SupabaseTemplateList({ templates, onTemplateClick }) {
  return (
    <motion.ul
      key="template list"
      style={{
        display: "flex",
        height: "100%",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <AnimatePresence>
        {templates.map(({ id, name }) => (
          <motion.li
            key={id}
            variants={templateVariants}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <SupabaseTemplateCard name={name}>
              <Button
                onClick={() => onTemplateClick(id)}
                variant="outlined"
                sx={{ borderStyle: "dashed", flexGrow: 1 }}
              >
                Edit
              </Button>
            </SupabaseTemplateCard>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
