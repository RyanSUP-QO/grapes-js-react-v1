import { Card, CardContent, Typography, CardActions } from "@mui/material";

export default function SupabaseTemplateCard({ name, children }) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {children}
      </CardActions>
    </Card>
  );
}
