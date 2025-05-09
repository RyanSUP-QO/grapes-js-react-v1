import { useEffect, useState } from "react";
import { createOptin, getAllOptins } from "../api/api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  List,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import NameInputDialog from "../components/NameInputDialog";

const availableSites = [
  {
    name: "Shout Factory",
    id: "barOBvW",
  },
  {
    name: "Ryan Test Site",
    id: "NanOrpOPpop",
  },
];

export default function Landing() {
  const [optins, setOptins] = useState([]);
  const [site, setSite] = useState(availableSites[0]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadOptins() {
      const response = await getAllOptins(site.id);
      console.log("r", response);
      setOptins(response.optins);
    }

    loadOptins();
  }, [site.id]);

  async function handleNewOptin(name) {
    const newOptin = await createOptin(site.id, name);
    navigate(`/build/${site.id}/${newOptin.optin.id}`);
  }

  return (
    <Container>
      <FormControl sx={{ my: 3 }} fullWidth>
        <InputLabel id="demo-simple-select-label">Site</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={site}
          label="Site"
          onChange={(event) => setSite(event.target.value)}
        >
          {availableSites.map((s) => (
            <MenuItem key={s.id} value={s}>
              {s.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={() => setShow(true)} variant="contained">
        New optin
      </Button>
      {optins.map((o) => (
        <Card key={o.id} sx={{ minWidth: 200, my: 2 }}>
          <CardContent>
            <Typography variant="h5">{o.name}</Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button onClick={() => navigate(`/build/${site.id}/${o.id}`)}>
              Edit
            </Button>
            <Button>Delete</Button>
          </CardActions>
        </Card>
      ))}
      <NameInputDialog
        open={show}
        onClose={() => setShow(false)}
        onSubmit={handleNewOptin}
        title="Name your new optin"
        submitText="Create"
      />
    </Container>
  );
}
