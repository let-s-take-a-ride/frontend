import React from "react";
import { CircularProgress, Box } from "@mui/material";

const loaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
};

const CustomLoader = () => {
  return (
    <Box style={loaderStyle}>
      <CircularProgress color="secondary" size={80} />
    </Box>
  );
};

export default CustomLoader;
