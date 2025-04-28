import { Button } from "@mui/material";
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
          key={"single-column"}
          variants={templateVariants}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <Button
            sx={{ width: "100%" }}
            onClick={() => navigate("/build/a?template=single-column")}
          >
            <TemplateCardB />
          </Button>
        </motion.li>
        <motion.li
          key={"two-column"}
          variants={templateVariants}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <Button
            sx={{ width: "100%" }}
            onClick={() =>
            navigate("/build/a?template=two-column")
            }
          >
            <TemplateCard />
          </Button>
        </motion.li>
      </AnimatePresence>
    </motion.ul>
  );
}
