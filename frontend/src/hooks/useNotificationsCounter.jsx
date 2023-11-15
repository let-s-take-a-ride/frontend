import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../reducer";
import { incrementDonutsEaten } from "../reducer";
const useNotificationsCounter = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  // const { id } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const domain = import.meta.env.VITE_BASE_URL;
    const updatedDomain = domain.substring(8);
    const socket = new WebSocket(
      `ws://${updatedDomain}ws/chat/user_${user.id}/`
    );

    const handleWebSocketMessage = (event) => {
      const message = JSON.parse(event.data);
      dispatch(incrementDonutsEaten());
    };

    socket.onmessage = (event) => {
      handleWebSocketMessage(event);
    };

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    setNotificationCount(user.donutsEaten);
  }, [notificationCount, user, dispatch]);

  // useEffect(() => {
  //   console.log(user.donutsEaten);
  //   const updatedDonutsEaten = user.donutsEaten;
  //   console.log(updatedDonutsEaten);
  //   setNotificationCount(updatedDonutsEaten);
  // }, [user.donutsEaten]);

  return notificationCount;
};

export default useNotificationsCounter;
