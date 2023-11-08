import React, { useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  //   const socket = new WebSocket(
  //     "ws://localhost:8000/ws/chat/chat_user_5_notifications/"
  //   );
  const socket = new WebSocket("ws://localhost:8000/ws/chat/user_5/");

  // Obsługa połączenia z WebSocket
  useEffect(() => {
    // Obsługa połączenia z serwerem WebSocket
    // socket.onopen = (event) => {
    //   // Wysyłanie wiadomości do serwera po nawiązaniu połączenia
    //   const message = {
    //     type: "greet",
    //     message: "Hello, server!",
    //   };
    //   socket.send(JSON.stringify(message));
    // };

    // Obsługa przychodzących wiadomości
    socket.onmessage = (event) => {
      console.log(event);
      const data = JSON.parse(event.data);
      setNotifications([...notifications, data.message]);
    };

    return () => {
      socket.close();
    };
  }, [notifications]);

  return (
    <div>
      <h2 style={{ color: "#ffffff" }}>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li style={{ color: "#ffffff" }} key={index}>
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
