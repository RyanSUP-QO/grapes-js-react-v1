import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
export default function MenuBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ zIndex: 3, opacity: 0.9 }}>
      <Toolbar variant="dense">
        {/* These should probably be links in final product */}
        <Button onClick={() => navigate("/optins")} color="inherit">
          Optins
        </Button>
        <Button onClick={() => navigate("/")} color="inherit">
          Templates
        </Button>
        <Button onClick={() => navigate("/studio")} color="inherit">
          Studio Demo
        </Button>
      </Toolbar>
    </AppBar>
  );
}
