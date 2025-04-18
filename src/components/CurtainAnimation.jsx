import { AnimatePresence, motion } from "motion/react";

export default function CurtainAnimation() {
  return (
    <AnimatePresence>
      <motion.div
        key="left"
        className="curtains"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50vw",
          height: "100vh",
          zIndex: 2,
        }}
      />
      <motion.div
        key="right"
        className="curtains"
        animate={{ x: ["0%", "100%"] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50vw",
          height: "100vh",
          zIndex: 2,
        }}
      />
    </AnimatePresence>
  );
}
