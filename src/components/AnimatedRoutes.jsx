import { Route, Routes, useLocation, useParams } from "react-router";
import OptInEditor from "./OptInEditor";
import TriggerDashboard from "../pages/TriggerDashboard";
import { motion } from "motion/react";

import TemplateSelect from "../pages/TemplateSelect";
import { AnimatePresence } from "motion/react";
import CurtainAnimation from "./CurtainAnimation";

function FadeInAnimationWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

function BuildRouteWrapper() {
  const { id } = useParams();
  return (
    <>
      <CurtainAnimation />
      <OptInEditor id={id} />
    </>
  );
}

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <FadeInAnimationWrapper>
              <TriggerDashboard />
            </FadeInAnimationWrapper>
          }
        />
        <Route
          path="/templates"
          element={
            <FadeInAnimationWrapper>
              <TemplateSelect />
            </FadeInAnimationWrapper>
          }
        />
        <Route
          path="/build/:id"
          element={<BuildRouteWrapper />}
        />
      </Routes>
    </AnimatePresence>
  );
}
