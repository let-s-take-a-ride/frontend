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
import { useDispatch, useSelector } from "react-redux";
import { AlertContext } from "../../contexts/AlertContext";
import { useContext } from "react";

const SettingsPage = () => {
  const user = useSelector((state) => state.user);
  const { openSnackbar } = useContext(AlertContext);

  const handleEditIcon = () => {
    console.log("clicked");
    openSnackbar("Successfully updated");
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
          label="username"
          variant="outlined"
          defaultValue={user.username}
          fullWidth
          margin="normal"
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            flex: 1,
          }}
        />

        <TextField
          variant="outlined"
          label="email"
          defaultValue={user.email}
          fullWidth
          margin="normal"
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* fetch data from backend for the rest */}
        {/* <TextField
          label="city"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        />
        <TextField
          label="prefered speed"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        />
        <TextField
          label="prefered distance"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        /> */}
        <Button
          style={{ marginTop: 15 }}
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => openSnackbar("Successfully updated")}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default SettingsPage;
