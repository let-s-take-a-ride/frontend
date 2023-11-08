import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAxiosInstance } from "../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decrementDonutsEaten } from "../reducer";
const useReadNotification = () => {
  const { notificationId } = useParams();
  const dispatch = useDispatch();

  const { getAccessTokenSilently } = useAuth0();
  const [notificationDetails, setNotificationDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(notificationId + " w use read notification");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.get(
          `notifications/${notificationId}`
        );
        setNotificationDetails(response.data);
        try {
          await axiosInstance.patch(`notifications/${notificationId}/`, {
            is_read: true,
          });
          dispatch(decrementDonutsEaten());
        } catch (error) {
          setError(error);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [notificationId]);

  return { isLoading, setLoading, notificationDetails, error };
};

export default useReadNotification;
