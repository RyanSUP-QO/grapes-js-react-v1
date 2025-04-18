import { motion } from "motion/react";
import TriggerCard from "../components/TriggerCard";
import { Box, Typography } from "@mui/material";
export default function TriggerDashboard() {
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
      <Typography variant="h1">EVENTS & TRIGGERS</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <motion.div whileHover={{ scale: 1.02 }}>
          <TriggerCard title="New user enters site" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <TriggerCard title="Customer birthday month" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <TriggerCard title="Embedded email capture" />
        </motion.div>
      </Box>
    </Box>
  );
}
