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
  return (
    <div style={{ color: "white" }}>
      <div>
        <IconButton color="primary" onClick={handleClick}>
          <NotificationsIcon />
        </IconButton>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Example notification"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              x
            </IconButton>
          }
        />
        <h1>User Profile</h1>
        <p>City: {user.city}</p>
        <p>id: {user.id}</p>
        <p>Profile Picture: {user.picture}</p>
        <p>Nickname: {user.username}</p>
        <p>Donuts Eaten: {user.donutsEaten}</p>
        {/* <button onClick={handleClick}>Update User Data</button> */}
      </div>
    </div>
  );
};

export default NotificationsPage;
