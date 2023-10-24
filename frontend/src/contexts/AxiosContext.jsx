import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const AxiosContext = createContext(null);

export const AxiosProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [axiosInstance, setAxiosInstance] = useState(null);

  useEffect(() => {
    const setupAxios = async () => {
      const domain = import.meta.env.VITE_DOMAIN;
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        },
      });
      const instance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        maxBodyLength: Infinity,
      });
      setAxiosInstance(instance);
    };

    setupAxios();
  }, [getAccessTokenSilently]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};



// const axiosInstance = useContext(AxiosContext);
// const response = await axiosInstance.put(`/users/${userId}`, updatedData);
