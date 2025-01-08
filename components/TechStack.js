import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiMui,
} from "react-icons/si";

export function TechStack() {
  // Tech stack data
  const techStack = [
    { name: "HTML", icon: <SiHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 size={40} />, color: "#1572B6" },
    { name: "JS", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact size={40} />, color: "#61DAFB" },
    { name: "Vue", icon: <SiVuedotjs size={40} />, color: "#42B883" },
    { name: "MUI", icon: <SiMui size={40} />, color: "#007FFF" },
  ];

  return (
    <Box
      sx={{
        marginTop: "50px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#151312",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {techStack.map((tech, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#151312",
                borderRadius: "10px",
                border: "1px solid #fff",
                color: "white",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                sx={{
                  color: tech.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {tech.icon}
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {tech.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}