import * as React from "react";
import { useNavigate } from "react-router";
import { Button, Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useTemplates } from "../hooks/useTemplates";
import SupabaseTemplateCard from "../components/SupabaseTemplateCard";
import NameInputDialog from "../components/NameInputDialog";
import supabase from "../utils/supabase";

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

export default function Templates() {
  const templates = useTemplates(true);
  const navigate = useNavigate();
  const [nameDialogOpen, setNameDialogOpen] = React.useState(false);

  const handleNewTemplate = async (name) => {
    const { data: blankTemplate } = await supabase
      .from("templates")
      .select("data,html,css")
      .eq("id", 6) // 6 is the blank "master" template.
      .single();

    const { data: newTemplate } = await supabase
      .from("templates")
      .insert([
        {
          is_template: true,
          name,
          ...blankTemplate,
        },
      ])
      .select("id")
      .single();

    navigate(`/build/${newTemplate.id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <AnimatePresence>
        <Typography key="h1" variant="h1">
          Templates
        </Typography>
        <motion.div
          key="new-template-button"
          style={{ margin: "50px" }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <Button
            onClick={() => setNameDialogOpen(true)}
            variant="contained"
            sx={{ flexGrow: 1 }}
            size="large"
          >
            New Template
          </Button>
        </motion.div>
        <Box
          flexGrow={1}
          width={"100%"}
          key="box"
          component={motion.ul}
          sx={{
            display: "flex",
            height: "100%",
            flexWrap: "wrap",
            justifyContent: "space-around",
            listStyle: "none",
            padding: 0,
            margin: 0,
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
                    onClick={() => navigate(`/build/${id}`)}
                    variant="outlined"
                    sx={{ borderStyle: "dashed", flexGrow: 1 }}
                  >
                    Edit
                  </Button>
                </SupabaseTemplateCard>
              </motion.li>
            ))}
          </AnimatePresence>
        </Box>
      </AnimatePresence>

      <NameInputDialog
        open={nameDialogOpen}
        onClose={() => setNameDialogOpen(false)}
        onSubmit={handleNewTemplate}
        title="Name your new template"
        submitText="Create Template"
      />
    </Box>
  );
}
