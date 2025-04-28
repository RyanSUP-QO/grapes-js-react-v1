import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function TemplateCard({ title }) {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Grid
          container
          spacing={2}
          sx={{ border: "1px solid", padding: 2, borderRadius: 1 }}
        >
          <Grid
            size={6}
            sx={{ border: "1px solid", height: 200, borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            Image
          </Grid>
          <Grid
            size={6}
            sx={{ border: "1px solid", height: 200, borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            Content
          </Grid>
        </Grid>
        <br />
        <Typography variant="h5">{title}</Typography>
        <Typography textTransform="none" gutterBottom fontSize={14}>
          Two column layout
        </Typography>
      </CardContent>
    </Card>
  );
}
