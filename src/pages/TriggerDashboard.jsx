import { motion } from "motion/react";
import TriggerCard from "../components/TriggerCard";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
export default function TriggerDashboard() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
      }}
    >
      <Typography variant="h1">TRIGGERS</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <motion.div whileHover={{ scale: 1.02 }}>
          <TriggerCard
            title="New user email capture"
            onClick={() => navigate("/templates")}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <TriggerCard
            title="Meta data capture"
            onClick={() => navigate("/templates")}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <TriggerCard
            title="Embedded email capture"
            onClick={() => navigate("/templates")}
          />
        </motion.div>
      </Box>
    </Box>
  );
}
