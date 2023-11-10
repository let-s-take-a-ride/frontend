import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAxiosInstance } from "../services/axiosInstance";

const useRides = (rideToggle) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.get(`/events/${rideToggle}/`);
        setRides(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [rideToggle, getAccessTokenSilently]);

  return { rides, loading, error };
};

export default useRides;
