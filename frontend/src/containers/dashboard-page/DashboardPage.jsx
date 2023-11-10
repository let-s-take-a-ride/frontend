import React from "react";
import completeLoginHOC from "../../hooks/completeLoginHOC";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import CustomLoader from "../../components/CustomLoader";
import Header from "../../components/Header";
import { Grid, Button, Paper, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({ picture, isLoading }) => {
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <>
      <Box
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header title="Home" />

        <Container sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%", height: "140px", fontSize: "1rem" }}
                onClick={() => navigate("/rides")}
              >
                <Typography color="white" component="div">
                  Hi {username}!
                  <Typography color="white" sx={{ display: "block" }}>
                    SEE WHAT'S GOING ON
                  </Typography>
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: "100%", height: "140px", fontSize: "1rem" }}
                onClick={() => navigate("/create-ride")}
              >
                MAYBE CREATE ANOTHER EVENT?
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                onClick={() => navigate("/my-rides")}
                sx={{
                  width: "100%",
                  height: "140px",
                  fontSize: "1rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                WHAT ABOUT YOUR EVENTS?
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "140px",
                  fontSize: "1rem",
                  backgroundColor: "info.main",
                }}
                onClick={() => navigate("/about")}
              >
                ABOUT{" "}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default completeLoginHOC(DashboardPage);
