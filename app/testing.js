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
  Projects
</Typography>
  {/*First Card*/}
  <Card
    sx={(theme) => ({
      marginTop: theme.spacing(7),
      borderRadius: theme.spacing(2),
      transition: "all 0.3s ease-in-out",
      position: "relative",
      maxWidth: "100%",
      overflow: "initial",
      background: "#151312",
      color: "white",
      border: "1px solid white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        paddingTop: theme.spacing(2),
      },
      width: "50%",
      height: "320px",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-4px)",
      },
    })}
  >
    <Box
      sx={(theme) => ({
        width: "50%",
        maxWidth: 300,
        position: "relative",
        marginTop: theme.spacing(-3),
        aspectRatio: "1/1",
        [theme.breakpoints.up("md")]: {
          width: 300,
          marginLeft: theme.spacing(-3),
          marginTop: 0,
          flexShrink: 0,
        },
      })}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={smart_study_logo}
          alt="Smart Study Logo"
          style={{
            objectFit: "cover",
            borderRadius: "150px",
            background: "transparent",
            width: "200px",
            height: "200px",
          }}
        />
      </Box>
    </Box>
    <CardContent>
      <Typography
        variant="overline"
        sx={{
          letterSpacing: "1px",
          fontSize: 12,
          marginBottom: "0.875em",
          display: "inline-block",
        }}
      >
        CURRENT PROJECT | JavaScript, Next.js, React, MUI, OpenAI,
        Firebase
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
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
          letterSpacing: "0.00938em",
          fontFamily: "Kanit",
        }}
      >
        Smart Study is a project that I began working on in
        August. The purpose of this project is to serve as a study
        website strictly for engineering students. Users will be
        able to create flashcards, generate cards using AI, watch
        videos, take quizzes, and much more. The waitlist for
        Smart Study is live, click the button to join!
      </Typography>
      <Link
        href="https://smartstudycs.vercel.app/"
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
          Read more
        </Button>
      </Link>
    </CardContent>
  </Card>


  {/*Second Card*/}
<Card
  sx={(theme) => ({
    marginTop: theme.spacing(7),
    borderRadius: theme.spacing(2),
    transition: "all 0.3s ease-in-out",
    position: "relative",
    maxWidth: "100%",
    overflow: "initial",
    background: "#151312",
    color: "white",
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: theme.spacing(2),
    },
    width: "50%",
    height: "320px",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  })}
  onClick={() => setOpenCardId("card2")}
>
  <Box
    sx={(theme) => ({
      width: "88%",
      maxWidth: 300,
      position: "relative",
      marginTop: theme.spacing(-3),
      aspectRatio: "1/1",
      [theme.breakpoints.up("md")]: {
        width: 300,
        marginLeft: theme.spacing(-3),
        marginTop: 0,
        flexShrink: 0,
      },
    })}
  >
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src={smart_translate_logo}
        alt="Smart Translate Logo"
        style={{
          objectFit: "cover",
          borderRadius: "150px",
          background: "transparent",
          width: "200px",
          height: "200px",
        }}
      />
    </Box>
  </Box>
  <CardContent>
    <Typography
      variant="overline"
      sx={{
        letterSpacing: "1px",
        fontSize: 12,
        marginBottom: "0.875em",
        display: "inline-block",
      }}
    >
      CURRENT PROJECT | JavaScript, Next.JS, React, MUI, Google
      APIs
    </Typography>
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
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
        letterSpacing: "0.00938em",
        fontFamily: "Kanit",
      }}
    >
      Smart Translate is a project that I began working on very
      recently. The purpose of this project is to serve as a
      translation website for text, speech, and videos. Users will
      be able to enter text, use their mic, or input a YouTube
      video and then select a language for it to be translated.
      There is no site or waitlist for this project yet, but check
      out the GitHub repo below!
    </Typography>
    <Link
      href="https://github.com/hamim23z/SmartTranslate-Main"
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
        Read more
      </Button>
    </Link>
  </CardContent>
</Card>


{/*Third Card*/}
<Card
  sx={(theme) => ({
    marginTop: theme.spacing(7),
    borderRadius: theme.spacing(2),
    transition: "all 0.3s ease-in-out",
    position: "relative",
    maxWidth: "100%",
    overflow: "initial",
    background: "#151312",
    color: "white",
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: theme.spacing(2),
    },
    width: "50%",
    height: "320px",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  })}
  onClick={() => setOpenCardId("card3")}
>
  <Box
    sx={(theme) => ({
      width: "88%",
      maxWidth: 300,
      position: "relative",
      marginTop: theme.spacing(-3),
      aspectRatio: "1/1",
      [theme.breakpoints.up("md")]: {
        width: 300,
        marginLeft: theme.spacing(-3),
        marginTop: 0,
        flexShrink: 0,
      },
    })}
  >
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src={chronicleai_logo}
        alt="ChronicleAI Logo"
        style={{
          objectFit: "cover",
          borderRadius: "150px",
          background: "transparent",
          width: "200px",
          height: "200px",
        }}
      />
    </Box>
  </Box>
  <CardContent>
    <Typography
      variant="overline"
      sx={{
        letterSpacing: "1px",
        fontSize: 12,
        marginBottom: "0.875em",
        display: "inline-block",
      }}
    >
      August 2024 | JavaScript, Next.JS, React, MUI, OpenAI
    </Typography>
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
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
        letterSpacing: "0.00938em",
        fontFamily: "Kanit",
      }}
    >
      ChronicleAI is a project that me and my friends worked on in
      August 2024, a lot of the project was completed in August
      and we made minor tweaks after. The purpose of this project
      is to serve as an AI chatbot for Computer Science students.
      Users can ask anything CS related . The project is
      completed, click the button to check it out!
    </Typography>
    <Link
      href="https://chronicle-ai-omega.vercel.app/"
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
        Read more
      </Button>
    </Link>
  </CardContent>
</Card>

{/*Fourth Card*/}
<Card
  sx={(theme) => ({
    marginTop: theme.spacing(7),
    borderRadius: theme.spacing(2),
    transition: "all 0.3s ease-in-out",
    position: "relative",
    maxWidth: "100%",
    overflow: "initial",
    background: "#151312",
    color: "white",
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: theme.spacing(2),
    },
    width: "50%",
    height: "320px",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  })}
  onClick={() => setOpenCardId("card4")}
>
  <Box
    sx={(theme) => ({
      width: "88%",
      maxWidth: 300,
      position: "relative",
      marginTop: theme.spacing(-3),
      aspectRatio: "1/1",
      [theme.breakpoints.up("md")]: {
        width: 300,
        marginLeft: theme.spacing(-3),
        marginTop: 0,
        flexShrink: 0,
      },
    })}
  >
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src={blizzardbot_logo}
        alt="Blizzard Bot Logo"
        style={{
          objectFit: "cover",
          borderRadius: "150px",
          background: "transparent",
          width: "200px",
          height: "200px",
        }}
      />
    </Box>
  </Box>
  <CardContent>
    <Typography
      variant="overline"
      sx={{
        letterSpacing: "1px",
        fontSize: 12,
        marginBottom: "0.875em",
        display: "inline-block",
      }}
    >
      January 2023 | Python, Discord.py
    </Typography>
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
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
        letterSpacing: "0.00938em",
        fontFamily: "Kanit",
      }}
    >
      Blizzard Bot is a Discord based bot that I worked on early
      2023 very frequently. The purpose of this project was to
      allow users in Discord servers to convert shoe sizes, check
      websites for bot security, give information about which
      companies are the best. This project is completed, click the
      button to check it out!
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
        Read more
      </Button>
    </Link>
  </CardContent>
</Card>
</Box>