import { Route, Routes, useLocation, useParams } from "react-router";
import OptInEditor from "./OptInEditor";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import CurtainAnimation from "./CurtainAnimation";
import Templates from "../pages/Templates";
import Optins from "../pages/Optins";
import GrapesStudioSDK from "./GrapesStudioSDK";

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
        <Route
          path="/"
          element={
            <FadeInAnimationWrapper>
              <Templates />
            </FadeInAnimationWrapper>
          }
        />
        <Route
          path="/optins"
          element={
            <FadeInAnimationWrapper>
              <Optins />
            </FadeInAnimationWrapper>
          }
        />
        <Route path="/build/:id" element={<BuildRouteWrapper />} />
        <Route path="/build" element={<BuildRouteWrapper />} />
      </Routes>
    </AnimatePresence>
  );
}
