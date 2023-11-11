import React from "react";
import LoginButton from "../../components/LoginButton";
import CustomLoader from "../../components/CustomLoader";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const LoginPage = () => {
  const { isLoading } = useAuth0();
  console.log(import.meta.env.VITE_DOMAIN);
  console.log(import.meta.env.VITE_CLIENT_ID);
  console.log(import.meta.env.VITE_AUDIENCE);

  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <>
      {/* <Title variant="h2">Let's take a ride!</Title> */}
      {/* <ContentContainer> */}
      <Box
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header title="Let's take a ride!" />
        <LoginButton />
      </Box>
      {/* </ContentContainer> */}
    </>
  );
};

export default LoginPage;
