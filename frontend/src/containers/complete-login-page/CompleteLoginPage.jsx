import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Box, TextField, Button } from "@mui/material";
import useCompleteLogin from "../../hooks/useCompleteLogin";
import CustomLoader from "../../components/CustomLoader";
import CustomSnackbar from "../../components/CustomSnackbar";
import { useNavigate } from "react-router-dom";

const CompleteLoginPage = () => {
  const {
    distance,
    setDistance,
    speed,
    setSpeed,
    city,
    setCity,
    errors,
    handleSubmit,
    isLoading,
    response,
    error,
  } = useCompleteLogin();
  const navigate = useNavigate();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const openSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    navigate("/");
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (response) {
      openSnackbar("Data submitted successfully!");
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      openSnackbar(JSON.stringify(error.status));
    }
  }, [error]);

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <>
      <Box
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomSnackbar
          open={snackbarOpen}
          message={snackbarMessage}
          onClose={closeSnackbar}
        />

        <Header title="complete login" />
        <TextField
          label="Average distance"
          variant="outlined"
          type="number"
          fullWidth
          required
          margin="normal"
          color="secondary"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          error={Boolean(errors.distance)}
          helperText={errors.distance}
        />
        <TextField
          label="Average speed"
          variant="outlined"
          fullWidth
          required
          type="number"
          margin="normal"
          color="secondary"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          error={Boolean(errors.speed)}
          helperText={errors.speed}
        />
        <TextField
          label="Main City"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          color="secondary"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={Boolean(errors.city)}
          helperText={errors.city}
        />
        <Button
          style={{ marginTop: 15 }}
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>{" "}
    </>
  );
};

export default CompleteLoginPage;
