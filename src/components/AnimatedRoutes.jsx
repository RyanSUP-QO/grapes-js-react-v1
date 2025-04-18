import { Route, Routes, useLocation } from "react-router";
import OptInEditor from "./OptInEditor";
import TriggerDashboard from "../pages/TriggerDashboard";
import { motion } from "motion/react";

import TemplateSelect from "../pages/TemplateSelect";
import { AnimatePresence } from "motion/react";
import Curtains from "./Curtains";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ height: "100%" }}
            >
              <TriggerDashboard />
            </motion.div>
          }
        />
        <Route
          path="/templates"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ height: "100%" }}
            >
              <TemplateSelect />
            </motion.div>
          }
        />
        <Route
          path="/build"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ height: "100%" }}
            >
              <Curtains />
              <OptInEditor />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
