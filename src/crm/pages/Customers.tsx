import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function Customers() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Customers
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            mb: 3,
          }}
        >
          <ConstructionIcon sx={{ fontSize: 40 }} />
        </Box>

        <Typography
          variant="h3"
          component="h2"
          sx={{
            mb: 2,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Coming Soon
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            textAlign: "center",
            maxWidth: 500,
          }}
        >
          The customer management page is currently under development. Soon you'll be able to view and manage your customer data from here.
        </Typography>
      </Paper>
    </Box>
  );
}
