import React from "react";
import { getAxiosInstance } from "../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useSelector} from "react-redux";
import { setUserData } from "../reducer";
import { clearUserDataFromLocalStorage } from "../services/localStorageService";
const useChangeUserDetails = () => {
  const { id } = useSelector((state) => state.user);
  const { getAccessTokenSilently } = useAuth0();
  const [response, setResponse] = useState("");
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const updatedData = new FormData();
  // const [formData, setFormData] = useState({});

  const handleSubmit = async (formData) => {
    console.log(formData);
    if (validate(formData)) {
      updatedData.append("nickname", formData.nickname);
      updatedData.append("preferences.distance", formData.distance);
      updatedData.append("preferences.average", formData.average);
      updatedData.append("preferences.city", formData.city);

      try {
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.patch(
          `/users/${id}/`,
          updatedData
        );
        console.log(response);
        setResponse("Successfully updated!");
      } catch (error) {
        setResponse("Something went wrong :(");
      } finally {
        setOpen(true);
      }
    }
  };

  const validate = (formData) => {
    let tempErrors = {};
    tempErrors.nickname = formData.nickname ? "" : "Name is required.";
    tempErrors.average =
      formData.average >= 15 && formData.average <= 50
        ? ""
        : "Speed must be an integer between 15 and 50.";
    tempErrors.city = formData.city ? "" : "City is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  return {
    errors,
    response,
    handleSubmit,
    response,
    setResponse,
    open,
    setOpen,
  };
};

export default useChangeUserDetails;
