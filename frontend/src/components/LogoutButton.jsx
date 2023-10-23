import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <Button
      color="secondary"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
