import React, { createContext, useState, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";

export const AlertContext = createContext({ openSnackbar: () => {} });

export const AlertProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  //   const [severity, setSeverity] = useState("info");

  const openSnackbar = (newMessage) => {
    setMessage(newMessage);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <AlertContext.Provider value={{ openSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        message={message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeSnackbar}
          >
            x
          </IconButton>
        }
      />
    </AlertContext.Provider>
  );
};
