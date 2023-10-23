import React from "react";
import LoginButton from "../../components/LoginButton";
import AuthHandler from "../../services/AuthHandler";
import LoginHandler from "../../components/LoginHandler";
const LoginPage = () => {
  console.log(" in login page");
  const apiUrl = import.meta.env.VITE_DOMAIN;
  console.log(apiUrl);
  return (
    <div style={{ color: "white" }}>
      {/* <LoginButton /> */}
      {/* <AuthHandler /> */}
      <LoginHandler />
    </div>
  );
};

export default LoginPage;
