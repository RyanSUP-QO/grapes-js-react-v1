import { AppBar, Toolbar, Typography } from "@mui/material";
export default function MenuBar() {
  return (
    <AppBar position="static" style={{ zIndex: 3, opacity: 0.9 }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          QUEEN ONE :: DIALOG BUILDER DEMO
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
