import SupabaseTemplateList from "../components/SupabaseTemplateList";
import supabase from "../utils/supabase";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button, Box, Typography } from "@mui/material";
import SelectTemplateDialog from "../components/SelectTemplateDialog";

export default function Optins() {
  // * We will do this with tanstack-query for the real-deal
  const [creatives, setCreatives] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      // We'll just pull meta data required for the preview card since template json, css and html can get large.
      let { data, error } = await supabase
        .from("templates")
        .select("id, name")
        .eq("is_template", false);

      setCreatives(data || []);
    };
    fetchTemplates();
  }, []);

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
        <Box flexGrow={1} width={"100%"} key="box">
          <SupabaseTemplateList
            templates={creatives}
            onTemplateClick={(id) => navigate(`/build/${id}`)}
          />
        </Box>
      </AnimatePresence>
    </Box>
  );
}
