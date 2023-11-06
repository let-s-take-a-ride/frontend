import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../reducer";
const NotificationsPage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    setOpen(true);
    dispatch(
      setUserData({
        city: "New City",
        profilePicture: "New Profile Picture URL",
        nickname: "New Nickname",
        donutsEaten: 10,
      })
    );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return <div style={{ color: "white" }}></div>;
};

export default NotificationsPage;
