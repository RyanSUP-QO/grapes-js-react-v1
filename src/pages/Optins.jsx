import { useNavigate } from "react-router";
import { Box, Typography, Button } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import SelectTemplateDialog from "../components/SelectTemplateDialog";
import { useTemplates } from "../hooks/useTemplates";
import SupabaseTemplateCard from "../components/SupabaseTemplateCard";
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

export default function Optins() {
  const creatives = useTemplates(false);
  const navigate = useNavigate();

  const handleSelectTemplate = async (id) => {
    const { data } = await supabase
      .from("templates")
      .select("data,html,css, name")
      .eq("id", id)
      .single();

    const { data: newTemplate } = await supabase
      .from("templates")
      .insert([{ is_template: false, name: `${data.name}_copy`, ...data }])
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
          Optin Creatives
        </Typography>
        <motion.div
          key="new-template-button"
          style={{ margin: "50px" }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <SelectTemplateDialog handleSelectTemplate={handleSelectTemplate} />
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
            {creatives.map(({ id, name }) => (
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
    </Box>
  );
}
