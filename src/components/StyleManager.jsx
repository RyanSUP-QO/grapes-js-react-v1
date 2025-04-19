import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function StyleManager({ sectors }) {
  return (
    <div className="gjs-qo-style-manager">
      {sectors.map((s) => (
        <Accordion key={s.getId()} disableGutters>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{s.getName()}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {s.getProperties().map((p) => (
              <p key={p.getId()}>{p.getId()}</p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
