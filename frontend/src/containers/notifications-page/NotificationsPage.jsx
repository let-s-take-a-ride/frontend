import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../reducer";
import Notifications from "../../components/NotificationsSocket";
const NotificationsPage = () => {
  return (
    <>
      <Notifications />
    </>
  );
};

export default NotificationsPage;
