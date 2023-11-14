import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementDonutsEaten } from "../reducer";

const WebSocketContext = createContext(null);

export function useWebSocket() {
  return useContext(WebSocketContext);
}

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const connectWebSocket = () => {
    if (user && user.id) {
      console.log("this is user id " + user.id);
      // const ws = new WebSocket(`ws://localhost:8000/ws/chat/user_${user.id}/`);
      const ws = new WebSocket(`wss://${import.meta.env.VITE_BASE_URL}ws/chat/user_${user.id}/`);
      

      ws.onopen = () => {
        console.log("WebSocket Connected");
        setRetryCount(0); // Reset retry counter on successful connection
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log("Received message:", message);
        dispatch(incrementDonutsEaten());
      };

      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        const delay = Math.min(1000 * 2 ** retryCount, 30000);
        setTimeout(() => {
          setRetryCount(retryCount + 1);
          connectWebSocket();
        }, delay);
      };

      ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
      };

      setSocket(ws);
    }
  };

  useEffect(() => {
    if (user?.id && !socket) {
      connectWebSocket();
    } else if (!user?.id && socket) {
      socket.close();
      setSocket(null);
    }

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [user?.id, socket]);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};
