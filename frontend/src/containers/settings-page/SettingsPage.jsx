import React from "react";
import Header from "../../components/Header";
import {
  Box,
  TextField,
  Avatar,
  Typography,
  Badge,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { AlertContext } from "../../contexts/AlertContext";
import { useContext, useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import useUserDetails from "../../hooks/useUserDetails";
import useChangeUserDetails from "../../hooks/useChangeUserDetails";
import CustomLoader from "../../components/CustomLoader";
import CustomSnackbar from "../../components/CustomSnackbar";
import { useNavigate } from "react-router-dom";
const SettingsPage = () => {
  const user = useSelector((state) => state.user);
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { openSnackbar } = useContext(AlertContext);
  const {
    handleSubmit,
    setFormData,
    errors,
    open,
    setOpen,
    response,
    setResponse,
  } = useChangeUserDetails();
  // const { values, handleChange, userDetails, isLoading } = useUserForm();
  const { userDetails, isLoading } = useUserDetails();
  const { values, handleChange } = useForm(userDetails);
  const handleEditIcon = () => {
    console.log("clicked");
    openSnackbar("Successfully updated");
  };

  const handleClose = () => {
    setResponse("");
    navigate("/");
    setOpen(false);
  };

  const handleSubmitClick = (e) => {
    handleSubmit(values);
  };

  if (isLoading && !userDetails) {
    return <CustomLoader />;
  }
  return (
    <>
      <CustomSnackbar open={open} message={response} onClose={handleClose} />
      <Box
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header title="settings" />
        <Typography color="white" sx={{ paddingBottom: "2vh" }}>
          Hi {user.username}!
        </Typography>

        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <EditIcon
              sx={{
                bgcolor: "background.default",
                color: "action.active",
                borderRadius: "50%",
                padding: "5px",
              }}
              onClick={handleEditIcon}
            />
          }
        >
          <Avatar
            alt="Profile"
            src={user.picture}
            // src={userDetails.picture ? userDetails.picture : user.picture}
            sx={{
              width: "70px",
              height: "70px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "50px",
              opacity: 0.6,
            }}
          />
        </Badge>

        <TextField
          label="nickname"
          variant="outlined"
          name="nickname"
          value={values.nickname ? values.nickname : ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          error={Boolean(errors.nickname)}
          helperText={errors.nickname}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            flex: 1,
          }}
        />
        <TextField
          variant="outlined"
          label="average distance"
          name="distance"
          value={values.distance ? values.distance : ""}
          onChange={handleChange}
          fullWidth
          type="number"
          margin="normal"
          color="secondary"
          error={Boolean(errors.distance)}
          helperText={errors.distance}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="outlined"
          label="average speed"
          name="average"
          value={values.average ? values.average : ""}
          onChange={handleChange}
          type="number"
          fullWidth
          margin="normal"
          color="secondary"
          error={Boolean(errors.average)}
          helperText={errors.average}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="outlined"
          label="preferred city"
          name="city"
          value={values.city ? values.city : ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
          color="secondary"
          error={Boolean(errors.city)}
          helperText={errors.city}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          style={{ marginTop: 15 }}
          variant="outlined"
          color="secondary"
          fullWidth
          // onClick={() => openSnackbar("Successfully updated")}
          onClick={handleSubmitClick}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default SettingsPage;
