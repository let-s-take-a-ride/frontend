import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import { teal, grey } from "@mui/material/colors";
import NavbarContainer from "./NavbarContainer";
// import Navbar from "./Navbar";

const LayoutContainer = ({ children }) => {
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
            alignItems="center"
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
