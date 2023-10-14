import React from "react";
import { Button, Box } from "@mui/material";
const Header = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          marginTop: "8px",
          marginBottom: "7vh",
          width: "100%",
        }}
      >
        <Button
          // variant="outlined"
          sx={{ width: "100%", height: "40px" }}
        >
          {" "}
          {title}{" "}
        </Button>
      </Box>
    </>
  );
};

export default Header;
