import {
  Card,
  CardContent,
  Typography,
  Stack,
  Switch,
  Button,
  CardActions,
  Badge,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

export default function TriggerCard({ onClick }) {
  return (
    <Badge color="warning" badgeContent="!">
      <Card sx={{ width: 250 }}>
        <CardContent>
          <Typography gutterBottom color="warning" fontSize={14}>
            Creatives are required to activate this trigger!
          </Typography>
          <Typography variant="h5">New User Capture</Typography>
          <Typography gutterBottom fontSize={14}>
            Grow your audience, grow your brand!
          </Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography>Off</Typography>
            <AntSwitch disabled />
            <Typography>Active</Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            onClick={onClick}
            variant="outlined"
            sx={{ borderStyle: "dashed" }}
          >
            + Creative
          </Button>
          <Button
            onClick={onClick}
            variant="outlined"
            sx={{ borderStyle: "dashed" }}
          >
            + Creative
          </Button>
        </CardActions>
      </Card>
    </Badge>
  );
}
