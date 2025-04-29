import { Button } from "@mui/material";
import TemplateCard from "./TemplateCard";
import { motion, AnimatePresence } from "motion/react";
import TemplateCardB from "./TemplateCardB";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
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
};

export default function TemplateGrid() {
  // * We will do this with tanstack-query for the real-deal
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    const fetchTemplates = async () => {
      let { data, error } = await supabase.from("templates").select("id");
      setTemplates(data.reverse());
    };
    fetchTemplates();
  }, []);

  const navigate = useNavigate();

  // TODO Show cards again instead of simple buttons.
  return (
    <motion.ul style={{ display: "flex" }}>
      <AnimatePresence>
        {templates.map(({ id }) => (
          <motion.li
            key={id}
            variants={templateVariants}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <Button
              sx={{ width: "100%" }}
              onClick={() => navigate(`/build/${id}`)}
              variant="contained"
            >
              {id}
            </Button>
          </motion.li>
        ))}
        <motion.li
          key="new"
          variants={templateVariants}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <Button
            sx={{ width: "100%" }}
            onClick={() => navigate(`/build`)}
            variant="contained"
          >
            Blank canvas
          </Button>
        </motion.li>
      </AnimatePresence>
    </motion.ul>
  );
}
