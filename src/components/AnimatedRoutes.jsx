import { Route, Routes, useLocation } from "react-router";
import CircuitLoader from "../pages/CircuitLoader";
import Landing from "../pages/Landing";
import OptInEditor from "./OptInEditor";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing />} />
      <Route path="/THE-TIME-IS-NOW" element={<CircuitLoader />} />
      <Route path="/build" element={<OptInEditor />} />
    </Routes>
  );
}
