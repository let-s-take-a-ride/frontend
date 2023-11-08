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
    const socket = new WebSocket(
      `ws://localhost:8000/ws/chat/user_${user.id}/`
    );

    const handleWebSocketMessage = (event) => {
      console.log(event);
      const message = JSON.parse(event.data);
      console.log(message);

      //   if (message.type === "notification") {
      // setNotificationCount((prevCount) => prevCount + 1);
      dispatch(incrementDonutsEaten());

      //   }
    };

    socket.onmessage = (event) => {
      handleWebSocketMessage(event);
    };

    return () => {
      socket.close();
    };
  }, []);

  // useEffect(() => {
  //   const updatedDonutsEaten = notificationCount;
  //   const updatedUserData = { ...user, donutsEaten: updatedDonutsEaten };

  //   dispatch(setUserData(updatedUserData));
  // }, [notificationCount, user, dispatch]);

  useEffect(() => {
    console.log(user.donutsEaten);
    const updatedDonutsEaten = user.donutsEaten;
    console.log(updatedDonutsEaten);
    setNotificationCount(updatedDonutsEaten);
  }, [user.donutsEaten]);

  return notificationCount;
};

export default useNotificationsCounter;
