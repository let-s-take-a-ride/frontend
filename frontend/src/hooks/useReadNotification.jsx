import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decrementDonutsEaten } from "../reducer";
import { getAxiosInstance } from "../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";

const useReadNotification = () => {
  const { notificationId } = useParams();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const [notificationDetails, setNotificationDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const markNotificationAsRead = async () => {
      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.patch(`notifications/${notificationId}/`, {
          is_read: true,
        });
        setNotificationDetails(response.data);
        dispatch(decrementDonutsEaten());
      } catch (error) {
        console.error('Error reading notification:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (notificationId) {
      markNotificationAsRead();
    }
  }, [notificationId, getAccessTokenSilently, dispatch]);

  return { isLoading, notificationDetails, error };
};

export default useReadNotification;
