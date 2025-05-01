import * as React from "react";
import { useNavigate } from "react-router";
import { Button, Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useStudioSDKTemplates } from "../hooks/useStudioSDKTemplates";
import SupabaseTemplateCard from "../components/SupabaseTemplateCard";

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
  const templates = useStudioSDKTemplates();
  const navigate = useNavigate();

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
            onClick={() => navigate(`/build`)}
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
            {templates.map((t) => (
              <motion.li
                key={t.id}
                variants={templateVariants}
                initial="show"
                exit="exit"
                whileHover="hover"
              >
                <SupabaseTemplateCard template={t}>
                  <Button
                    onClick={() => navigate(`/build/${t.id}`)}
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
