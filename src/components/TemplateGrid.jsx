import { Grid, Button, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import TemplateCard from "./TemplateCard";
import { motion, AnimatePresence } from "motion/react";
import TemplateCardB from "./TemplateCardB";

const DEMO_TEMPLATES = [
  {
    id: "QUEEN ONE GOLD STANDARD",
    render: (props) => <TemplateCard {...props} />,
  },
  {
    id: "QUEEN ONE EXPRESS",
    render: (props) => <TemplateCardB {...props} />,
  },
];

const templateVariants = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
  activate: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.7, // 👈 delay until after layout shift
      duration: 0.4,
      type: "spring",
    },
  },
};

export default function TemplateGrid() {
  const [selectedTemplate, setSelectedTemplate] = useState();

  // In the future we will get templates from some data steam
  // const [templates, setTemplates] = useState([]);
  // useEffect(() => {
  //   const fetchTemplates = () => setTemplates(someAPI);
  // }, []);

  // TODO: on click - set timeout to navigate to mock load screen (pass actual destination)
  // TODO: Mock load will just be a series of cool animations
  // TODO: Then navigate to the actual destination (Can use this time to load brandsphere assets)

  return (
    <motion.ul style={{ display: "flex" }}>
      <AnimatePresence>
        {DEMO_TEMPLATES.filter(
          (t) => !selectedTemplate || t.id === selectedTemplate
        ).map((t) => (
          <motion.li
            key={t.id}
            layout
            variants={templateVariants}
            initial="show"
            animate={t.id === selectedTemplate ? "activate" : "show"}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={t.id !== selectedTemplate ? { scale: 1.02 } : undefined}
          >
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              {t.id}
            </Typography>
            <Button
              sx={{ width: "100%" }}
              onClick={() => setSelectedTemplate(t.id)}
            >
              {t.render()}
            </Button>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
