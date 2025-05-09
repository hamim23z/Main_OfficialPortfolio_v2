// components/CardBlog.js
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

// Component that renders all cards FOR PROJECTS
export function CardBlog() {
  return (
    <>
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #024AAF",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
          marginLeft: "20px"
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/smart_finder_logo.png"
            alt="Smart Finder"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            <span style = {{fontWeight: "bold"}}>CURRENT PROJECT</span> | Next.js, Node.js, React, Javascript, Material UI,
            Docker, MySQL, Google APIs, OpenAI, Stack Auth
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Smart Finder
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Smart Finder is a project that I am currently working on with other people. The
            purpose of this project is to serve as a map based, geolocation website for delis and
            bodegas. Within a certain radius, users will be able to see different stores and the sandwich
            prices there. They will be able to leave photos, reviews, and have access to deals too! Plenty of
            more features available as well.
          </Typography>

          <Link href="/" target="_blank">
            <Button
              sx={{
                backgroundColor: "red",
                borderRadius: 100,
                paddingLeft: 3,
                paddingRight: 3,
                color: "#ffffff",
                fontFamily: "Kanit",
                marginLeft: "-5px",
              }}
            >
              COMING SOON
            </Button>
          </Link>
        </CardContent>
      </Card>



      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #024AAF",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/smart_study_logo.png"
            alt="Smart Study"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            <span style = {{fontWeight: "bold"}}>CURRENT PROJECT - MASSIVE CHANGES IN PLACE</span> | Next.js, Node.js, React, Javascript, Material UI,
            Firebase, Stack Auth
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Smart Study
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Smart Study is a project that I began working on in August. The
            purpose of this project is to serve as a study website strictly for
            engineering students. Users will be able to create flashcards,
            generate cards using AI, watch videos, take quizzes, and much more.
            The waitlist for Smart Study is live, click the button to join!
          </Typography>

          <Link href="https://smartstudycs.vercel.app/" target="_blank">
            <Button
              sx={{
                backgroundColor: "red",
                borderRadius: 100,
                paddingLeft: 3,
                paddingRight: 3,
                color: "#ffffff",
                fontFamily: "Kanit",
                marginLeft: "-5px",
              }}
            >
              SITE LIVE NOW
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Second Card */}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #F43730",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/smart_translate_logo.png"
            alt="Smart Translate"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            <span style = {{fontWeight: "bold"}}>PROJECT ON HOLD FOR NOW</span> | Next.js, Node.js, React, Javascript, Material UI,
            Open AI, Google Translate API
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Smart Translate
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Smart Translate is a project that I began working on recently. The
            purpose of this project is to serve as a translation website for
            text and videos. Users will be able to enter text or a video link
            and then select a language for it to be translated. The site is now
            live, with the translation ready and the video translate in
            development. Click the button to check it out!
          </Typography>

          <Link href="https://smarttranslatehub.vercel.app/" target="_blank">
            <Button
              sx={{
                backgroundColor: "red",
                borderRadius: 100,
                paddingLeft: 3,
                paddingRight: 3,
                color: "#ffffff",
                fontFamily: "Kanit",
                marginLeft: "-5px",
              }}
            >
              SITE LIVE NOW
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Third Card */}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #024AAF",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/chronicleai_logo.png"
            alt="Smart Translate"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            August 2024 | Next.js, Node.js, React, Javascript, Material UI,
            Firebase
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Chronicle AI
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            ChronicleAI is a project that me and my friends worked on in August
            2024, a lot of the project was completed in August and we made minor
            tweaks after. The purpose of this project is to serve as an AI
            chatbot for Computer Science students. Users can ask anything CS
            related . The project is completed, click the button to check it
            out!
          </Typography>

          <Link href="https://chronicle-ai-omega.vercel.app/" target="_blank">
            <Button
              sx={{
                backgroundColor: "red",
                borderRadius: 100,
                paddingLeft: 3,
                paddingRight: 3,
                color: "#ffffff",
                fontFamily: "Kanit",
                marginLeft: "-5px",
              }}
            >
              SITE LIVE NOW
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/*Fourth Card*/}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #024AAF",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/blizzardbot_logo.png"
            alt="Smart Translate"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            January 2023 | Python, Discord.py
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Blizzard Bot
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Blizzard Bot is a Discord based bot that I worked on early 2023 very
            frequently. The purpose of this project was to allow users in
            Discord servers to convert shoe sizes, check websites for bot
            security, give information about which companies are the best. This
            project is completed, click the button to check it out!
          </Typography>

          <Link
            href="https://github.com/hamim23z/BlizzardBot1"
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              sx={{
                backgroundColor: "red",
                borderRadius: 100,
                paddingLeft: 3,
                paddingRight: 3,
                color: "#ffffff",
                fontFamily: "Kanit",
                marginLeft: "-5px",
              }}
            >
              GITHUB REPO
            </Button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}