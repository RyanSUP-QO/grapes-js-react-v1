import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid,
  CardHeader,
} from "@mui/material";

export default function TemplateCardB() {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Grid
          container
          spacing={2}
          sx={{ border: "1px solid", padding: 2, borderRadius: 1 }}
        >
          <Grid
            size={12}
            sx={{ border: "1px solid", height: 200, borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            Content
          </Grid>
        </Grid>
        <br />
        <Typography textTransform="none" gutterBottom fontSize={14}>
          Standard single column layout
        </Typography>
      </CardContent>
    </Card>
  );
}
