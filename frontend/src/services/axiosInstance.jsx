import { useState, useEffect } from "react";
import axios from "axios";

export async function getAxiosInstance(getAccessTokenSilently) {
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

  return instance;
}
