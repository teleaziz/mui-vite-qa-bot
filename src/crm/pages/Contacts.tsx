import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

export default function Contacts() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { sm: "100%", md: "1700px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 4px 20px rgba(0,0,0,0.08)"
              : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <CardContent sx={{ p: { xs: 4, sm: 6 } }}>
          <Stack spacing={3} alignItems="center">
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: (theme) =>
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                }}
              >
                <ContactsRoundedIcon
                  sx={{
                    fontSize: 64,
                    color: "white",
                  }}
                />
              </Box>
              <ConstructionRoundedIcon
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  fontSize: 40,
                  color: (theme) => theme.palette.warning.main,
                  backgroundColor: (theme) => theme.palette.background.paper,
                  borderRadius: "50%",
                  p: 0.5,
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0 2px 8px rgba(0,0,0,0.15)"
                      : "0 2px 8px rgba(0,0,0,0.5)",
                }}
              />
            </Box>

            <Stack spacing={2} alignItems="center">
              <Chip
                label="Coming Soon"
                color="primary"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  px: 1,
                }}
              />

              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  background: (theme) =>
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "linear-gradient(135deg, #8b9bff 0%, #9f7dc7 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Contacts Management
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: 480,
                  lineHeight: 1.7,
                }}
              >
                We're building an amazing contacts management system where
                you'll be able to organize, track, and manage all your business
                contacts in one place.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Box
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? "rgba(102, 126, 234, 0.08)"
                        : "rgba(102, 126, 234, 0.15)",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mb: 0.5 }}
                  >
                    Features Include
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Contact Profiles • Tags • Notes
                  </Typography>
                </Box>

                <Box
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? "rgba(118, 75, 162, 0.08)"
                        : "rgba(118, 75, 162, 0.15)",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mb: 0.5 }}
                  >
                    Stay Tuned
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Launching Soon
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
