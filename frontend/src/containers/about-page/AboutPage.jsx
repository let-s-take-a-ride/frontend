import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AboutPage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState(" - ");
  const domain = import.meta.env.VITE_DOMAIN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
        // const decodedToken = jwtDecode(token);
        // console.log(decodedToken);
        console.log(token);
        const parts = token.split(".");
        if (parts.length !== 3) {
          console.error("Invalid JWT token format");
        }
        const response = await axios.get(
          "http://localhost:8000/user/test-auth",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        // setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [getAccessTokenSilently]);

  return (
    <div style={{ color: "white" }}>
      AboutPage {data}
      {/* <LoginButton />
      <LogoutButton /> */}
    </div>
  );
};

export default AboutPage;
