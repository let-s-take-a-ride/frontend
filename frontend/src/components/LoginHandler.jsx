// LoginHandler.js
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";

const LoginHandler = () => {
  const [loginInitiated, setLoginInitiated] = useState(false);
  const navigate = useNavigate();

  const handleLoginInitiation = () => {
    setLoginInitiated(true); // Ustaw stan na true, gdy logowanie zostanie zainicjowane
    console.log(initiated);
    navigate("/preferences"); // Przekieruj użytkownika do strony ukończenia logowania
  };

  return <LoginButton onLoginInitiated={handleLoginInitiation} />;
};

export default LoginHandler;
