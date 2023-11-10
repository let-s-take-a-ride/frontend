import { Button } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      // sx={{ marginTop: "30vh", width: "250px" }}
      sx={{ width: "250px" }}
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
