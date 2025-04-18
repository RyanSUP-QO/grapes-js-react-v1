import { Button, Typography } from "@mui/material";
import TemplateCard from "./TemplateCard";
import { motion, AnimatePresence } from "motion/react";
import TemplateCardB from "./TemplateCardB";
import { useNavigate } from "react-router";

const templateVariants = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

export default function TemplateGrid() {
  // In the future we will get templates from some data steam
  // const [templates, setTemplates] = useState([]);
  // useEffect(() => {
  //   const fetchTemplates = () => setTemplates(someAPI);
  // }, []);

  const navigate = useNavigate();

  return (
    <motion.ul style={{ display: "flex" }}>
      <AnimatePresence>
        <motion.li
          key={"QUEEN ONE GOLDEN STANDARD"}
          variants={templateVariants}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            {"QUEEN ONE GOLDEN STANDARD"}
          </Typography>
          <Button
            sx={{ width: "100%" }}
            onClick={() =>
              navigate("/build?template=QUEEN_ONE_GOLDEN_STANDARD")
            }
          >
            <TemplateCard />
          </Button>
        </motion.li>
        <motion.li
          key={"BREAK THE GLASS"}
          variants={templateVariants}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            {"BREAK THE GLASS"}
          </Typography>
          <Button
            sx={{ width: "100%" }}
            onClick={() => navigate("/build?template=QUEEN_ONE_HERO")}
          >
            <TemplateCardB />
          </Button>
        </motion.li>
      </AnimatePresence>
    </motion.ul>
  );
}
