import {
  Card,
  CardContent,
  Typography,
  Stack,
  Switch,
  Button,
  CardActions,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1890ff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

export default function TriggerCard({ title }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 350 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Typography>Off</Typography>
          <AntSwitch />
          <Typography>Active</Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => navigate("/bistro")}
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ flexGrow: 1 }}
        >
          A
        </Button>
        <Button
          onClick={() => navigate("/templates")}
          variant="outlined"
          sx={{ borderStyle: "dashed", flexGrow: 1 }}
        >
          + B
        </Button>
      </CardActions>
    </Card>
  );
}
