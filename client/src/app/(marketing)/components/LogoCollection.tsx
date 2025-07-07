"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useColorScheme } from "@mui/material/styles";
import Image from "next/image";

const darkModeLogos = [
  "/orgs/ms.webp",
  "/orgs/gog.webp",
  "/orgs/and.webp",
  "/orgs/monie.svg",
  "/orgs/opai.png",
  "/orgs/gs.svg",
];

const lightModeLogos = [
  "/orgs/ms.webp",
  "/orgs/gog.webp",
  "/orgs/and.webp",
  "/orgs/monie.svg",
  "/orgs/opai.png",
  "/orgs/gs.svg",
];

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 0.7,
};

const LogoCollection = () => {
  const { mode, systemMode } = useColorScheme();
  let logos;
  if (mode === "system") {
    if (systemMode === "light") {
      logos = lightModeLogos;
    } else {
      logos = darkModeLogos;
    }
  } else if (mode === "light") {
    logos = lightModeLogos;
  } else {
    logos = darkModeLogos;
  }

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: "text.secondary" }}
      >
        Trusted by the best companies
      </Typography>
      <Grid container sx={{ justifyContent: "center", mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid key={index}>
            <Image
              src={logo}
              width={80}
              height={50}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
              className="w-full h-full object-contain grayscale"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LogoCollection;
