// completeLoginHOC.js
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const completeLoginHOC = (WrappedComponent) => {
  return (props) => {
    const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
    const domain = import.meta.env.VITE_DOMAIN;
    const [picture, setPicture] = useState("");
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true); // Set loading to true at the start of fetchData
        if (!isAuthenticated) {
          setIsLoading(false); // Set loading to false if not authenticated
          return;
        }
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
          console.log(response.data);
          if (response.data.is_first_login === true) {
            // Navigate to complete login or do something else
            navigate("/complete-login");
          } else {
            setPicture(response.data.picture);
          }
        } catch (error) {
          console.error("Error:", error);
        }
        setIsLoading(false); // Set loading to false at the end of fetchData
      };

      fetchData();
    }, [getAccessTokenSilently, isAuthenticated, user, navigate]);

    return (
      <WrappedComponent picture={picture} isLoading={isLoading} {...props} />
    );
  };
};

export default completeLoginHOC;
