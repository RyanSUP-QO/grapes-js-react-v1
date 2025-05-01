import { Card, CardContent, Typography, CardActions } from "@mui/material";

export default function SupabaseTemplateCard({ template, children }) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h5">{template.name}</Typography>
        <Typography variant="small">{`by ${template.author.name}`}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {children}
      </CardActions>
    </Card>
  );
}
