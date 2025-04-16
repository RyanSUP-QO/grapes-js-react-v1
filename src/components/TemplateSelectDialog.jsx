import { Dialog, DialogTitle, DialogContent, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import TemplateCard from "./TemplateCard";
import { motion, AnimatePresence } from "motion/react";
import TemplateCardB from "./TemplateCardB";

export default function TemplateSelectDialog({ open, onClose }) {
  // Idea is we can abstract to a hook, then steam available templates from some data source.
  // Keeping in mind we want a 'template marketplace', or easily update templates
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = () =>
      setTemplates([<TemplateCard />, <TemplateCardB />]);
    fetchTemplates();
  }, []);
  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      <DialogTitle id="alert-dialog-title">{"Choose a template"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <AnimatePresence>
            {templates.map((t, i) => (
              <Grid size={6} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {t}
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
