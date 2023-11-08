import React from "react";
import LoginButton from "../../components/LoginButton";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Background = styled("div")({
  backgroundImage: `url("/logo1.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

const ContentContainer = styled(Paper)({
  background: "rgba(0, 0, 0, 0.7)",
  borderRadius: "10px",
  padding: "10px 20px",
  textAlign: "center",
  position: "relative",
  top: "20vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});


const Title = styled(Typography)({
  fontSize: "2rem",
  // fontFamily: "cursive",
  color: "white",
  marginBottom: "300px",
});

const LoginPage = () => {
  return (
    <Background>
      <Title variant="h2">Let's take a ride!</Title>

      <ContentContainer>
        <LoginButton />
      </ContentContainer>
    </Background>
  );
};

export default LoginPage;
