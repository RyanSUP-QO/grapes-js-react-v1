import { Route, Routes, useLocation, useParams } from "react-router";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import GrapesStudioSDK from "./GrapesStudioSDK";
import Landing from "../pages/Landing";

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
      {/* <CurtainAnimation /> */}
      <GrapesStudioSDK id={id} />
    </>
  );
}

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/build/:siteId/:id" element={<BuildRouteWrapper />} />
        <Route path="/build" element={<BuildRouteWrapper />} />
      </Routes>
    </AnimatePresence>
  );
}
