import { AppBar, Toolbar, Typography } from "@mui/material";
export default function MenuBar() {
  return (
    <AppBar position="static" style={{ zIndex: 3 }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          QUEEN ONE :: OPT-IN LAB
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
