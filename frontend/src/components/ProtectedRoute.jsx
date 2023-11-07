import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../reducer";
import { clearUserDataFromLocalStorage } from "../services/localStorageService";
import CustomLoader from "./CustomLoader";
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      clearUserDataFromLocalStorage();
      dispatch(
        setUserData({
          city: "",
          profile: "",
          username: "",
          email: "",
          donutsEaten: 0, 
        })
      );
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return <CustomLoader />;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
