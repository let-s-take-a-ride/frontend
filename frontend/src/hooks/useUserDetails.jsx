import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAxiosInstance } from "../services/axiosInstance";
import { useSelector } from "react-redux";

const useUserDetails = () => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.get(`/users/${id}/`);
        console.log(response.data);
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [isAuthenticated, getAccessTokenSilently]);

  return { userDetails, isLoading, error };
};

export default useUserDetails;
