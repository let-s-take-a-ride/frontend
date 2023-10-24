import { useState } from "react";
import { getAxiosInstance } from "../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";

const useCompleteLogin = () => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const [distance, setDistance] = useState("");
  const [speed, setSpeed] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});

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
      console.log("All fields are valid");
      const userId = 2;
      const updatedData = {
        first_login: false,
        preferences: {
          distance: distance,
          average: speed,
          city: city,
        },
      };
      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.patch(
          `users/${userId}/`,
          updatedData
        );
        console.log(response);
        setCity("");
        setDistance("");
        setSpeed("");
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
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
  };
};

export default useCompleteLogin;
