import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SupabaseTemplateList from "./SupabaseTemplateList";
import supabase from "../utils/supabase";

export default function SelectTemplateDialog({ handleSelectTemplate }) {
  const [open, setOpen] = React.useState(false);

  const [templates, setTemplates] = React.useState([]);
  React.useEffect(() => {
    const fetchTemplates = async () => {
      // We'll just pull meta data required for the preview card since template json, css and html can get large.
      let { data, error } = await supabase
        .from("templates")
        .select("id, name")
        .eq("is_template", true); // where is_template = true

      setTemplates(data || []);
    };
    fetchTemplates();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        New creative
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Choose a template:"}</DialogTitle>
        <DialogContent>
          <SupabaseTemplateList
            templates={templates}
            onTemplateClick={handleSelectTemplate}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
