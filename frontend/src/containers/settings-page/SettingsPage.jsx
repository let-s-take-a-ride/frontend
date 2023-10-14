import React from "react";
import Header from "../../components/Header";
import { Box, TextField, Avatar, Typography, Badge } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const SettingsPage = () => {
  const handleEditIcon = () => {
    console.log("clicked");
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
          Hi martijjx!
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
            src="profile.jpg"
            sx={{
              width: "70px",
              height: "70px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "50px",
              opacity: 0.6, // Dodano właściwość opacity
            }}
          />
        </Badge>
        <TextField
          label="Some config"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        />
        <TextField
          label="Some config"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        />
        <TextField
          label="Some config"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        />
        <TextField
          label="Some config"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        />
      </Box>
    </>
  );
};

export default SettingsPage;
