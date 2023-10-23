import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RidesPage = () => {
  const domain = import.meta.env.VITE_DOMAIN;

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [nick, setNick] = useState("");
  const [picture, setPicture] = useState("");

  console.log(user); // Drukuj obiekt user, aby sprawdzić, co zawiera

  useEffect(() => {
    const getUserMetadata = async () => {
      if (!isAuthenticated) {
        console.log("User is not authenticated");
        return;
      }

      if (!user) {
        console.log("User object is undefined");
        return;
      }
      console.log("inside");
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        console.log(userDetailsByIdUrl);

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const response = await metadataResponse.json();
        console.log(response);
        // const { user_metadata } = await metadataResponse.json();
        // console.log(user_metadata);
        // setUserMetadata(user_metadata);
        setNick(response.given_name);
        console.log(response.picture);
        setPicture(response.picture);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user, isAuthenticated]);

  return (
    isAuthenticated && (
      <div style={{ color: "white" }}>
        <img src={picture} alt={"testo"} />
        <h2>{nick}</h2>
      </div>
    )
  );
};

export default RidesPage;
