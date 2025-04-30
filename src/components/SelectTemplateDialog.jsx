import * as React from "react";
import { Button, Dialog, DialogTitle, Box, DialogContent } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useTemplates } from "../hooks/useTemplates";
import SupabaseTemplateCard from "./SupabaseTemplateCard";
import NameInputDialog from "./NameInputDialog";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";

const templateVariants = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
  hover: {
    scale: 1.02,
  },
};

export default function SelectTemplateDialog() {
  const [open, setOpen] = React.useState(false);
  const [nameDialogOpen, setNameDialogOpen] = React.useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = React.useState(null);
  const templates = useTemplates(true);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTemplateSelect = async (id) => {
    setSelectedTemplateId(id);
    setNameDialogOpen(true);
  };

  const handleNameSubmit = async (name) => {
    const { data } = await supabase
      .from("templates")
      .select("data,html,css")
      .eq("id", selectedTemplateId)
      .single();

    const { data: newTemplate } = await supabase
      .from("templates")
      .insert([
        {
          is_template: false,
          name,
          ...data,
        },
      ])
      .select("id")
      .single();

    handleClose();
    navigate(`/build/${newTemplate.id}`);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        New creative
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Choose a template:"}</DialogTitle>
        <DialogContent>
          <Box
            component={motion.ul}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              listStyle: "none",
              padding: 0,
              margin: 0,
              gap: 2,
            }}
          >
            <AnimatePresence>
              {templates.map(({ id, name }) => (
                <motion.li
                  key={id}
                  variants={templateVariants}
                  initial="show"
                  exit="exit"
                  whileHover="hover"
                >
                  <SupabaseTemplateCard name={name}>
                    <Button
                      onClick={() => handleTemplateSelect(id)}
                      variant="outlined"
                      sx={{ borderStyle: "dashed", flexGrow: 1 }}
                    >
                      Use Template
                    </Button>
                  </SupabaseTemplateCard>
                </motion.li>
              ))}
            </AnimatePresence>
          </Box>
        </DialogContent>
      </Dialog>

      <NameInputDialog
        open={nameDialogOpen}
        onClose={() => setNameDialogOpen(false)}
        onSubmit={handleNameSubmit}
        title="Name your new creative"
        submitText="Create Creative"
      />
    </React.Fragment>
  );
}
