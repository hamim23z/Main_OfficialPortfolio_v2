"use client";
import React from "react";
import {Box, Typography, Paper, Container, Card, CardContent, Button} from "@mui/material";

import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { CardHighlight } from "../components/CardHighlight";  // Import the CardHighlight component
import { CardBlog } from "../components/CardBlog"; // Import the CardBlog component
import { CardExperience } from "../components/CardExperience"; // Import the CardExperience component
import { TechStack } from "../components/TechStack";
import { TechStack2 } from "../components/TechStack2";
import { TechStack3 } from "../components/TechStack3";

{/*Navbar Icons*/}
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

{/*Images and Image Stuff*/}
import Image from "next/image";
import github_cool from "../public/github_cool.jpg";

{/*Icons for Fixed Column on Left*/}
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function HomePage() {
  {/*Code for Handling Navbar Buttons going to certain sections within the page*/}
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigation = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box>
        {/*This is the navbar code*/}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            background: "#151312",
            display: "flex",
          }}
        >
          <Tooltip title="Home" arrow>
            <BottomNavigationAction
              icon={<HomeIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("home")}
            />
          </Tooltip>

          <Tooltip title="Projects" arrow>
            <BottomNavigationAction
              icon={<FolderIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("projects")}
            />
          </Tooltip>

          <Tooltip title="Experience" arrow>
            <BottomNavigationAction
              icon={<WorkHistoryIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("experience")}
            />
          </Tooltip>

          <Tooltip title="Tech Stack" arrow>
            <BottomNavigationAction
              icon={<BuildIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("tech_stack")}
            />
          </Tooltip>
        </BottomNavigation>
      </Box>

      {/* All components will go in here. Besides the navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on larger screens
            justifyContent: "center", // Center align horizontally
            alignItems: "flex-start", // Align items at the top
            marginTop: "50px",
          }}
        >
          {/* Left Section */}
          <Grid item xs={12} sm={4}>
            <Container>
              <Box
                sx={{
                  backgroundColor: "#151312",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: "auto", md: "500px" }, // Adjust for responsiveness
                  maxWidth: "370px",
                  width: "100%",
                  flexDirection: "column",
                  borderRadius: "10px",
                  border: "2px solid #fff",
                  padding: 2,
                  marginLeft: { xs: "auto", md: "0" },
                  marginRight: { xs: "auto", lg: "auto" },
                }}
              >
                {/* Profile Content */}
                <Image
                  src={github_cool}
                  alt="Description"
                  width={200}
                  height={200}
                  style={{
                    borderRadius: "100%",
                  }}
                />
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontFamily: "Kanit",
                      fontWeight: 900,
                      paddingTop: "20px",
                    }}
                  >
                    Hamim Choudhury
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      fontFamily: "Kanit",
                      textAlign: "center",
                      fontWeight: 400,
                      marginTop: "10px",
                      lineHeight: "24px",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      maxWidth: "100%",
                    }}
                  >
                    A software engineer with a passion to develop projects, big
                    or small.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                    marginTop: "20px",
                  }}
                >
                  <Link
                    href="https://www.linkedin.com/in/hamimc/"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: "30px" }} />
                  </Link>

                  <Link
                    href="https://github.com/hamim23z"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: "30px" }} />
                  </Link>

                  <Link
                    href="https://drive.google.com/file/d/1MTzeql2ODnNnoAUkhYTj4o32xU62EuwV/view?usp=sharing"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <FileCopyIcon sx={{ fontSize: "30px" }} />
                  </Link>

                  <Link
                    href="mailto:hamimc232@gmail.com"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <EmailIcon sx={{ fontSize: "30px" }} />
                  </Link>
                </Box>
              </Box>
            </Container>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                marginTop: { xs: "30px", md: "0" }, // Adjust spacing for smaller screens
                paddingX: { xs: "10px", md: "50px" },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: "800px",
                }}
              >
                Software Engineer
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: { xs: "0.9rem", md: "1.2rem" },
                  lineHeight: { xs: "1.5", md: "1.8" },
                  textAlign: "left",
                  maxWidth: "800px",
                  marginTop: "20px",
                  marginBottom: "40px",
                }}
              >
                Hey! I&apos;m Hamim Choudhury, a Computer Science student at The
                City College of New York. My journey of coding started in middle
                school, where I took a computer course and used MIT&apos;s
                Scratch as my first language. <br />
                <br />
                And that is how my passion for coding began. I started off by
                building simple websites and I explored how to code myself. I
                now code on a regular basis, learning a multitude of languages
                and using them very often. <br />
                <br />I started off as a frontend engineer only, but have now
                become a full-stack engineer. I love to build projects that can
                solve real-world problems and ones that people will use on a
                regular basis.
              </Typography>

              {/*This is where the two current projects that I am working on cards go*/}
              <CardHighlight />
            </Box>

            {/*This is the second section on the right side. Projects*/}
            <Box
              sx={{
                marginTop: { xs: "30px", md: "0" }, // Adjust spacing for smaller screens
                paddingX: { xs: "10px", md: "50px" },
                justifyContent: "left",
              }}
            >
              <Typography
                id="projects"
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: "800px",
                  marginTop: "100px",
                }}
              >
                Personal Projects
              </Typography>

              {/*This is where my projects that I am highlighting on cards go*/}
              <CardBlog />
            </Box>



            {/*This is the third section on the right side. Experience*/}
            <Box
              sx={{
                marginTop: { xs: "30px", md: "0" }, // Adjust spacing for smaller screens
                paddingX: { xs: "10px", md: "50px" },
                justifyContent: "left",
              }}
            >
              <Typography
                id="experience"
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: "800px",
                  marginTop: "100px",
                }}
              >
                My Experience
              </Typography>

              {/*This is where my projects that I am highlighting on cards go*/}
              <CardExperience />
            </Box>


            {/*This is the fourth and final secion on the right side. Tech Stach*/}
            <Box
              sx={{
                marginTop: { xs: "30px", md: "0" }, // Adjust spacing for smaller screens
                paddingX: { xs: "10px", md: "50px" },
                justifyContent: "left",
                marginBottom: "100px"
              }}
            >
              <Typography
                id="tech_stack"
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: "800px",
                  marginTop: "100px",
                }}
              >
                Tech Stack
              </Typography>

              {/*This is where my tech stack cards go. First row*/}
              <TechStack></TechStack>

              {/*This is where my tech stack cards go. Second row*/}
              <TechStack2></TechStack2>

              {/*This is where my tech stack cards go. Third row*/}
              <TechStack3></TechStack3>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
