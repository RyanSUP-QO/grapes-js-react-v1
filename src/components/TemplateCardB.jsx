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
    <Card>
      <CardContent>
        <Grid
          container
          spacing={2}
          sx={{ border: "1px solid", padding: 2, borderRadius: 1 }}
        >
          <Grid
            size={12}
            sx={{ border: "1px solid", height: 200, borderRadius: 1 }}
          />
        </Grid>
        <br />
        <Typography gutterBottom fontSize={14}>
          Queen One recommends this for so on and yada yada
        </Typography>
      </CardContent>
    </Card>
  );
}
