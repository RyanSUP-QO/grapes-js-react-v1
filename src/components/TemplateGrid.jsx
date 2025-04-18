import { Button, Typography } from "@mui/material";
import TemplateCard from "./TemplateCard";
import { motion, AnimatePresence } from "motion/react";
import TemplateCardB from "./TemplateCardB";

const DEMO_TEMPLATES = [
  {
    id: "QUEEN ONE GOLD STANDARD",
    render: (props) => <TemplateCard {...props} />,
  },
  {
    id: "QUEEN ONE EXPRESS",
    render: (props) => <TemplateCardB {...props} />,
  },
];

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

export default function TemplateGrid({ onTemplateSelect }) {
  // In the future we will get templates from some data steam
  // const [templates, setTemplates] = useState([]);
  // useEffect(() => {
  //   const fetchTemplates = () => setTemplates(someAPI);
  // }, []);

  return (
    <motion.ul style={{ display: "flex" }}>
      <AnimatePresence>
        {DEMO_TEMPLATES.map((t) => (
          <motion.li
            key={t.id}
            variants={templateVariants}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              {t.id}
            </Typography>
            <Button sx={{ width: "100%" }} onClick={() => onTemplateSelect(t)}>
              {t.render()}
            </Button>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
