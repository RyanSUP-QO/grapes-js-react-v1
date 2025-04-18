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
        <Typography textTransform="none" gutterBottom fontSize={14}>
          PERFORMANT. ACCESSIBLE. CROSS-PLATFORM.
        </Typography>
      </CardContent>
    </Card>
  );
}
