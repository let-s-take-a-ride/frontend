import { useState, useEffect } from "react";

const useNotificationsCounter = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/chat/user_5/");

    const handleWebSocketMessage = (event) => {
      console.log(event);
      const message = JSON.parse(event.data);

      //   if (message.type === "notification") {
      setNotificationCount((prevCount) => prevCount + 1);
      //   }
    };

    socket.onmessage = (event) => {
      handleWebSocketMessage(event);
    };

    return () => {
      socket.close(); 
    };
  }, []);

  return notificationCount;
};

export default useNotificationsCounter;
