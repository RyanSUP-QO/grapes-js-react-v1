import { Box } from "@mui/material";
import { QueenOneCircuits } from "../components/QOBG";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

// Just a cool loading screen
export default function CircuitLoader() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/" + searchParams.get("path")), 4000);
  }, [navigate, searchParams]);
  return (
    <AnimatePresence mode="wait">
      <QueenOneCircuits />
      <motion.div
        key="left"
        className="queen-one-circuits"
        animate={{ x: ["0%", "-100%", "0%"] }}
        transition={{
          duration: 4, // slow and smooth
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
      <motion.div
        key="right"
        className="queen-one-circuits"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{
          duration: 4, // slow and smooth
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
    </AnimatePresence>
  );
}
