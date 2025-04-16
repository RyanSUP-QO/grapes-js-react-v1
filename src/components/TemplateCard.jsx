import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

export default function TemplateCard({ onClick, title }) {
  return (
    <Button sx={{ width: "100%" }} onClick={onClick}>
      <Card>
        {"2 Column"}
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{ border: "1px solid", padding: 2, borderRadius: 1 }}
          >
            <Grid
              size={4}
              sx={{ border: "1px solid", height: 200, borderRadius: 1 }}
            />
            <Grid
              size={8}
              sx={{ border: "1px solid", height: 200, borderRadius: 1 }}
            />
          </Grid>
          <br />
          <Typography variant="h5">{title}</Typography>
          <Typography gutterBottom fontSize={14}>
            Queen One recommends this for so on and yada yada
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
