import React, { useState } from "react";
import Header from "../../components/Header";
import { Box, TextField, Button } from "@mui/material";
import useCompleteLogin from "../../hooks/useCompleteLogin";

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
  } = useCompleteLogin();

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
        <Header title="complete login" />
        <TextField
          label="Average distance"
          variant="outlined"
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
          variant="constained"
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
