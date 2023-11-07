import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import useCreateRide from "../../hooks/useCreateRide";
import CustomSnackbar from "../../components/CustomSnackbar";

const CreateRidePage = () => {
  const {
    formData,
    selectedJpgFile,
    selectedGpxFile,
    handleChange,
    handleJpgFileChange,
    handleGpxFileChange,
    handleSubmit,
    errors,
    open,
    setOpen,
    response,
    setResponse,
  } = useCreateRide();

  const handleClose = () => {
    setResponse("");
    setOpen(false);
  };

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
          open={open}
          message={response}
          severity="success"
          onClose={handleClose}
        />

        <Header title="Create Ride" />
        {/* <form onSubmit={handleSubmit}> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              required
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              error={Boolean(errors.date)}
              helperText={errors.date}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Average Speed"
              name="average_speed"
              type="number"
              value={formData.average_speed || ""}
              onChange={handleChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">km/h</InputAdornment>
                ),
              }}
              error={Boolean(errors.average_speed)}
              helperText={errors.average_speed}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Max Members"
              name="max_members"
              type="number"
              value={formData.max_members || ""}
              onChange={handleChange}
              fullWidth
              error={Boolean(errors.max_members)}
              helperText={errors.max_members}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              error={Boolean(errors.city)}
              helperText={errors.city}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          sx={{
            mt: 3,
          }}
        >
          <Grid item xs={6}>
            <InputLabel htmlFor="photo">
              <Button
                // variant="contained"
                variant={selectedJpgFile ? "outlined" : "contained"}
                // color="primary"
                color={selectedJpgFile ? "tertiary" : "primary"}
                component="label"
                fullWidth
                startIcon={
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/gif"
                    name="photo"
                    id="photo"
                    onChange={handleJpgFileChange}
                    style={{ display: "none" }}
                  />
                }
                style={{
                  padding: "8px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  {selectedJpgFile
                    ? selectedJpgFile.length > 10
                      ? selectedJpgFile.substring(0, 10) + "..."
                      : selectedJpgFile
                    : "photo"}
                </div>
              </Button>
            </InputLabel>
            {errors.photo && <div style={{ color: "red" }}>{errors.photo}</div>}
          </Grid>

          <Grid item xs={6}>
            <InputLabel htmlFor="gpx_track">
              <Button
                // variant="contained"
                variant={selectedGpxFile ? "outlined" : "contained"}
                // color="primary"
                color={selectedGpxFile ? "secondary" : "primary"}
                component="label"
                fullWidth
                startIcon={
                  <input
                    type="file"
                    accept=".gpx"
                    name="gpx_track"
                    id="gpx_track"
                    onChange={handleGpxFileChange}
                    style={{ display: "none" }}
                  />
                }
                style={{
                  padding: "8px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  {selectedGpxFile
                    ? selectedGpxFile.length > 10
                      ? selectedGpxFile.substring(0, 10) + "..."
                      : selectedGpxFile
                    : "GPX Route"}
                </div>
              </Button>
            </InputLabel>
            {errors.gpx_track && (
              <div style={{ color: "red" }}>{errors.gpx_track}</div>
            )}
          </Grid>
        </Grid>
        <Button
          type="button"
          sx={{ mt: 4 }}
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Create Ride
        </Button>
        {/* </form> */}
        {/* </Container> */}
      </Box>
    </>
  );
};

export default CreateRidePage;
