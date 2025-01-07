// components/CardExperience.js
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";  // Use Next.js Image for optimized images

// Component that renders all cards
export function CardExperience() {
  return (
    <>
      {/* First Card */}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          position: "relative",
          maxWidth: 800,
          marginLeft: "auto",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
          },
        })}
      >
        <CardMedia
          component="div"
          sx={{
            width: "88%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-20px",
            height: 0,
            paddingBottom: "25%",
            borderRadius: "16px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <Image
            src=""  // Hardcoded image path
            alt="Smart Study"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#111"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            July 2024 - Jan 2024 | NYC Department of Records
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "900", marginBottom: "0.35em", fontFamily: "Kanit" }}>
          Software Engineer Intern
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: 2, fontSize: "0.8rem", letterSpacing: "0.00938em", fontFamily: "Kanit" }}>
          Developed a Python-based website monitoring system using Docker and Azure, increasing uptime by 15% and reducing false positives by 40% while enabling proactive issue resolution for critical web services. Created a custom script to compress PDF files efficiently, reducing file sizes by 60% and improving performance for web-based document delivery systems. Led a redesign of the internal company website, focusing on user-centric design principles to create a more efficient and visually appealing platform.
          </Typography>
        </CardContent>
      </Card>




      {/* Second Card */}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          position: "relative",
          maxWidth: 800,
          marginLeft: "auto",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
          },
        })}
      >
        <CardMedia
          component="div"
          sx={{
            width: "88%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-20px",
            height: 0,
            paddingBottom: "25%",
            borderRadius: "16px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <Image
            src=""  // Hardcoded image path
            alt="Smart Translate"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#111"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            June 2023 - Oct 2023 | NYC Department of Design and Construction
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "900", marginBottom: "0.35em", fontFamily: "Kanit" }}>
          Software Engineer & IT Intern
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: 2, fontSize: "0.8rem", letterSpacing: "0.00938em", fontFamily: "Kanit" }}>
          Developed and implemented a Python-based Hash File system to efficiently identify Laptop device IDs, reducing vulnerability assessment time and improving overall responses. Managed a cross-functional team in executing a major software system rollout, device updates and software installations; resulting in a 25% reduction in downtime. Led the identification of vulnerabilities, performed repairs, updated hundreds of devices, and deployed new software, alongside creating user and support accounts on laptops and mobile devices.
          </Typography>
        </CardContent>
      </Card>



      {/* Third Card */}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          position: "relative",
          maxWidth: 800,
          marginLeft: "auto",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
          },
        })}
      >
        <CardMedia
          component="div"
          sx={{
            width: "88%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-20px",
            height: 0,
            paddingBottom: "25%",
            borderRadius: "16px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <Image
            src=""  // Hardcoded image path
            alt="Smart Translate"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#111"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            July 2021 - June 2023 | Trademark Services
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "900", marginBottom: "0.35em", fontFamily: "Kanit" }}>
          Sneaker Information Developer
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: 2, fontSize: "0.8rem", letterSpacing: "0.00938em", fontFamily: "Kanit" }}>
          Designed a sophisticated multi-tiered Discord bot using Python and JavaScript to provide instant updates on sneaker and clothing releases, including essential details like location and timing. Optimized the software platform by integrating new features that led to an increase in monthly subscriptions and improved customer retention through valuable user insights. Facilitated pull requests, code reviews, and stress testing to ensure the quality of data throughout the Software Development Life Cycle.
          </Typography>
        </CardContent>
      </Card>



      {/*Fourth Card*/}
      <Card
        sx={(theme) => ({
          margin: "auto",
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          position: "relative",
          maxWidth: 800,
          marginLeft: "auto",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
          },
        })}
      >
        <CardMedia
          component="div"
          sx={{
            width: "88%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-20px",
            height: 0,
            paddingBottom: "25%",
            borderRadius: "16px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <Image
            src=""  // Hardcoded image path
            alt="Smart Translate"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#111"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            Oct 2020 - Feb 2021 | Fyllan
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "900", marginBottom: "0.35em", fontFamily: "Kanit" }}>
          Web Development Intern
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: 2, fontSize: "0.8rem", letterSpacing: "0.00938em", fontFamily: "Kanit" }}>
          Created an interactive reservation system with real-time availability updates using JavaScript and AJAX, leading to a 30% increase in online bookings for Fyllan restaurants. Integrated third-party APIs using JavaScript&apos;s fetch API, enhancing website functionality with features like real-time restaurant updates and social media feeds. Collaborated with senior developers to design and implement interfaces, merging feedback to refine the UI/UX.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}