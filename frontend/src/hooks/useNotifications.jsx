import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAxiosInstance } from "../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";

const useNotifications = () => {
  const { id, donutsEaten } = useSelector((state) => state.user);

  const { getAccessTokenSilently } = useAuth0();
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.get(`notifications/?search=${id}`);
        setNotifications(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, donutsEaten]);

  return { isLoading, setLoading, notifications, error };
};

export default useNotifications;
