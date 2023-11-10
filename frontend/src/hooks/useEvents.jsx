import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { getAxiosInstance } from "../services/axiosInstance";

const useEvents = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const params = {
          ordering: order,
          search: searchQuery,
        };
        const response = await axiosInstance.get("events/", { params });
        console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [order, searchQuery]);

  return { events, loading, error, setOrder, setSearchQuery };
};

export default useEvents;
