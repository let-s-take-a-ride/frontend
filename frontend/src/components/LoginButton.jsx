import { Button } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      sx={{ marginTop: "30vh" }}
      variant="outlined"
      color="secondary"
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
