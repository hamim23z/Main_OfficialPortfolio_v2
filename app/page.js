"use client";
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Tooltip from "@mui/material/Tooltip";

import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

{
  /*Images and Image Stuff*/
}

import github_cool from "../public/github_cool.jpg";
import smart_study_logo from "../public/smart_study_logo.png";
import smart_translate_logo from "../public/smart_translate_logo.png";
import html_logo from "../public/html_logo.png";
import css_logo from "../public/css_logo.png";
import javascript_logo from "../public/javascript_logo.png";
import nextjs_logo from "../public/nextjs_logo.png";
import react_logo from "../public/react_logo.png";
import mui_logo from "../public/mui_logo.png";
import python_logo from "../public/python_logo.png";
import flask_logo from "../public/flask_logo.png";
import docker_logo from "../public/docker_logo.png";
import openai_logo from "../public/openai_logo.png";
import firebase_logo from "../public/firebase_logo.png";
import mysql_logo from "../public/mysql_logo.png";
import chronicleai_logo from "../public/chronicleai_logo.png";
import blizzardbot_logo from "../public/blizzardbot_logo.png";
import nycddc_logo from "../public/nycddc_logo.png";
import fyllan_logo from "../public/fyllan_logo.png";
import trademark_logo from "../public/trademark_logo.png";
import doris_logo from "../public/doris_logo.png";
import mapcs from "../public/mapcs.png";

{/*Bottom Navigation aka Main Navbar Icons*/}
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

{/*Icons for Fixed Column on Left*/}
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EmailIcon from "@mui/icons-material/Email";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


export default function HomePage() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledRoot = styled("div")(() => ({
    position: "relative",
    borderRadius: "1rem",
    minWidth: 320,
    paddingTop: 60,
    "&:before": {
      transition: "0.2s",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "1rem",
      zIndex: 0,
      bottom: 0,
      backgroundColor: "#6e00b3",
    },
    "&:hover": {
      "&:before": {
        bottom: -6,
      },
    },
  }));

  const CardMediaCover = styled(Box)(() => ({
    borderRadius: "1rem",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
  }));

  const StyledContent = styled("div")(() => ({
    position: "relative",
    zIndex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 1,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      borderRadius: "1rem",
      background: "#151312",
    },
  }));

  const AvatarLogo = styled(Box)(() => ({
    transition: "0.3s",
    width: 100,
    height: 100,
    borderRadius: "1rem",
    position: "relative",
    overflow: "hidden",
  }));

  const ProjectCard = ({ cover, logo, title, brand, date }) => {
    return (
      <StyledRoot>
        <CardMediaCover>
          <Image
            src={cover}
            alt="Project Cover"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </CardMediaCover>
        <StyledContent>
          <Box position={"relative"} zIndex={1}>
            <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>
              <Box>
                <AvatarLogo>
                  <Image
                    src={logo}
                    alt="Project Logo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </AvatarLogo>
              </Box>
              <Box alignSelf="flex-end">
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kanit",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mt={4} alignItems={"center"}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Kanit",
                  }}
                >
                  {brand}
                </Typography>
              </Box>
              <Box ml="auto">
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Kanit",
                    color: "#fff",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "12px",
                  }}
                >
                  {date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </StyledContent>
      </StyledRoot>
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [openCardId, setOpenCardId] = useState(null);

  const handleNavigation = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box>
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
              component="a"
              href="#home"
              icon={<HomeIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("home")}
            />
          </Tooltip>

          <Tooltip title="Projects" arrow>
            <BottomNavigationAction
              component="a"
              href="#projects"
              icon={<FolderIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("projects")}
            />
          </Tooltip>

          <Tooltip title="Experience" arrow>
            <BottomNavigationAction
              component="a"
              href="#experience"
              icon={<WorkHistoryIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("experience")}
            />
          </Tooltip>

          <Tooltip title="Tech Stack" arrow>
            <BottomNavigationAction
              component="a"
              href="#tech_stack"
              icon={<BuildIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("techStack")}
            />
          </Tooltip>
        </BottomNavigation>
      </Box>

      {/* All components will go in here. Besides the navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={20}>
          {/* Left Section */}
          <Grid item xs={12} sm={4}>
            <Container fixed>
              <Box
                sx={{
                  backgroundColor: "#151312",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "500px",
                  maxWidth: "370px",
                  width: "100%",
                  flexDirection: "column",
                  borderRadius: "10px",
                  marginTop: "80px",
                  border: "2px solid #fff",
                  padding: 2,
                }}
              >
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
                    href="https://drive.google.com/file/d/1bP4svtLhOd14Z6ETjaB4nnav04BX9_EI/view?usp=sharing"
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
              sx={{ marginTop: "70px", paddingX: { xs: "10px", md: "50px" } }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "2rem", md: "3rem" },
                  textAlign: "left",
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
                  maxWidth: "1100px",
                  marginTop: "20px",
                }}
              >
                Hey! I&apos;m Hamim Choudhury, a Computer Science student at The
                City College of New York. My journey of coding started in middle
                school, where I took a computer course and used MIT&apos;s
                Scratch as my first language. <br></br> <br></br>And that is how
                my passion for coding began. I started off by building simple
                websites and I explored how to code myself. I now code on a
                regular basis, learning a multitude of languages and using them
                very often. <br></br> <br></br> I started off as a frontend
                engineer only, but have now become a full-stack engineer. I love
                to build projects that can solve real-world problems and ones
                that people will use on a regular basis.
              </Typography>

              <Box mt={4}>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    maxWidth: "800px",
                    marginX: "auto",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: { xs: "100%", md: "48%" },
                      marginBottom: { xs: "20px", md: "0" },
                    }}
                  >
                    <ProjectCard
                      brand={"Personal Project"}
                      date={"Currently Working On"}
                      cover={smart_study_logo}
                      logo={smart_study_logo}
                      title={"Smart Study"}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: { xs: "100%", md: "48%" },
                    }}
                  >
                    <ProjectCard
                      brand={"Personal Project"}
                      date={"Currently Working On"}
                      cover={smart_translate_logo}
                      logo={smart_translate_logo}
                      title={"Smart Translate"}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>


            


          </Grid>
        </Grid>
      </Box>
    </>
  );
}
