import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationsPage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
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
      </div>
    </div>
  );
};

export default NotificationsPage;
