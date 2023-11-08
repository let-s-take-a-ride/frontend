import React from "react";
// import { CssBaseline } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { teal, grey } from "@mui/material/colors";
import NavbarContainer from "./NavbarContainer";
import useNotificationsCounter from "../../hooks/useNotificationsCounter";
// import Navbar from "./Navbar";

const LayoutContainer = ({ children }) => {
  const notificationCount = useNotificationsCounter();
  console.log("notifications count w layout: " + notificationCount);
  return (
    <>
      <CssBaseline />

      {/* <Grid container style={{ height: "100vh" }}>
        <Grid item xs={2.5} sx={{ backgroundColor: teal[500] }}>
          <NavbarContainer />
        </Grid>
        <Grid item xs={9.5} sx={{ backgroundColor: grey[900] }}>
          {children}
        </Grid>
      </Grid> */}
      <Grid
        container
        style={{
          height: "100vh",
          backgroundColor: grey[800],
        }}
      >
        <NavbarContainer />
        <Grid item xs={12} sx={{ backgroundColor: grey[900] }}>
          <Box
            display="flex"
            justifyContent="center"
            // paddingTop="8vh"
            alignItems="flex-start"
            boxSizing="border-box"
            style={{ height: "100%" }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutContainer;
