import SupabaseTemplateList from "../components/SupabaseTemplateList";
import supabase from "../utils/supabase";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button, Box, Typography } from "@mui/material";

export default function Templates() {
  // * We will do this with tanstack-query for the real-deal
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    const fetchTemplates = async () => {
      // We'll just pull meta data required for the preview card since template json, css and html can get large.
      let { data, error } = await supabase
        .from("templates")
        .select("id, name")
        .eq("is_template", true) // where is_template = true
        .neq("id", 6);

      setTemplates(data || []);
    };
    fetchTemplates();
  }, []);

  const navigate = useNavigate();

  const handleNewTemplate = async () => {
    const { data: blankTemplate } = await supabase
      .from("templates")
      .select("data,html,css")
      .eq("id", 6) // 6 is the blank "master" template.
      .single();

    const { data: newTemplate } = await supabase
      .from("templates")
      .insert([{ is_template: true, ...blankTemplate }])
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
            onClick={handleNewTemplate}
            variant="contained"
            sx={{ flexGrow: 1 }}
            size="large"
          >
            New Template
          </Button>
        </motion.div>
        <Box flexGrow={1} width={"100%"} key="box">
          <SupabaseTemplateList
            templates={templates}
            onTemplateClick={(id) => navigate(`/build/${id}`)}
          />
        </Box>
      </AnimatePresence>
    </Box>
  );
}
