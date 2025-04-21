import { Paper, Typography, Box, Grid } from "@mui/material";

export default function CustomBlockManager({
  mapCategoryBlocks,
  dragStart,
  dragStop,
}) {
  console.log(mapCategoryBlocks);
  return (
    <Box sx={{ p: 2 }}>
      {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
        <div>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: "text.primary",
              fontWeight: "medium",
            }}
          >
            {category}
          </Typography>
          <Grid container spacing={2}>
            {blocks.map((block) => (
              <Grid item xs={12} sm={6} md={4} key={block.getId()}>
                <Paper
                  elevation={2}
                  draggable
                  onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                  onDragEnd={() => dragStop(false)}
                  sx={{
                    p: 2,
                    cursor: "grab",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      "& > *": {
                        maxWidth: "100%",
                        height: "auto",
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: block.getMedia() }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: "text.secondary",
                    }}
                  >
                    {block.getLabel()}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Box>
  );
}
