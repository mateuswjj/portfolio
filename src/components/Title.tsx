import { Box, Typography } from "@mui/material";

export function Title() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        Mateus Weinert Portfolio
      </Typography>
    </Box>
  );
}
