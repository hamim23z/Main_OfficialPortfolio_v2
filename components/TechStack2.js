import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiFlask,
} from "react-icons/si";
import { FaCoffee } from "react-icons/fa"; // Placeholder for Java

export function TechStack2() {
  // Tech stack data
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "#000000" },
    { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "#339933" },
    { name: "Python", icon: <SiPython size={40} />, color: "#306998" },
    { name: "Docker", icon: <SiDocker size={40} />, color: "#2496ED" },
    { name: "Flask", icon: <SiFlask size={40} />, color: "#000000" },
    { name: "Java", icon: <FaCoffee size={40}/>, color: "#007396" }
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