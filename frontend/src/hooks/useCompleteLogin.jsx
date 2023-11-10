import { useState } from "react";
import { getAxiosInstance } from "../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDataFromLocalStorage } from "../services/localStorageService";

const useCompleteLogin = () => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const [distance, setDistance] = useState("");
  const [speed, setSpeed] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const validate = () => {
    let tempErrors = {};
    tempErrors.distance =
      distance > 0 ? "" : "Distance must be a positive number.";
    tempErrors.speed =
      speed >= 15 && speed <= 50
        ? ""
        : "Speed must be an integer between 15 and 50.";
    tempErrors.city = city ? "" : "City is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      setResponse(null);
      setError(null);
      const updatedData = {
        first_login: false,
        preferences: {
          distance: distance,
          average: speed,
          city: city,
        },
      };
      try {
        const userData = getUserDataFromLocalStorage();
        console.log(userData);
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.patch(
          `users/${userData.id}/`,
          updatedData
        );
        setResponse(response.data);
        setCity("");
        setDistance("");
        setSpeed("");
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        setError(error.response ? error.response.data : error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("There are errors");
    }
  };

  return {
    distance,
    setDistance,
    speed,
    setSpeed,
    city,
    setCity,
    errors,
    handleSubmit,
    isLoading,
    response,
    error,
  };
};

export default useCompleteLogin;
