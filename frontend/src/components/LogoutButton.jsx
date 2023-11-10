import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { clearUserDataFromLocalStorage } from "../services/localStorageService";
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const handleLogout = async () => {
    try {
      await logout({ returnTo: window.location.origin });
      clearUserDataFromLocalStorage();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Button
      color="secondary"
      // onClick={() => {
      //   logout({ returnTo: window.location.origin });
      // }}
      onClick={handleLogout}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
