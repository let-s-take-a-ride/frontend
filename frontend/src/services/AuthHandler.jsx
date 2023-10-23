// AuthHandler.js
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";

const AuthHandler = () => {
  const { getAccessTokenSilently, isAuthenticated, user, isLoading } =
    useAuth0();
  const domain = import.meta.env.VITE_DOMAIN;
  const [picture, setPicture] = useState("");
  const [loginCompleted, setLoginCompleted] = useState(false); // Nowy stan
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthentication = async () => {
      console.log("ocb");
      if (!isLoading && isAuthenticated) {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
        try {
          const response = await axios.post(
            "http://localhost:8000/auth/login/",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Response:", response.data);
          console.log(
            response.data.is_first_login + " ------------------- is first login"
          );

          if (response.data.is_first_login === true) {
            console.log("in navigate");
            navigate("/preferences");
          } else {
            console.log(response.data.picture);
            setPicture(response.data.picture);
          }
          setLoginCompleted(true); // Ustaw stan loginCompleted na true po zakończeniu procesu logowania
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    if (!loginCompleted) {
      // Wywołaj handleAuthentication tylko jeśli loginCompleted jest false
      handleAuthentication();
    }
  }, [
    getAccessTokenSilently,
    isAuthenticated,
    user,
    navigate,
    isLoading,
    loginCompleted,
  ]);

  return isAuthenticated ? (
    <div style={{ color: "white" }}>
      <img src={picture} alt={"testo"} />
    </div>
  ) : (
    <LoginButton />
  );
};

export default AuthHandler;
