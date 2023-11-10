import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";

const CustomSnackbar = ({ open, message, onClose }) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message={message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            x
          </IconButton>
        }
      />
    </>
  );
};

export default CustomSnackbar;
