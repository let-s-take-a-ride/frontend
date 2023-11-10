import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useParams, Link } from "react-router-dom";
import useReadNotification from "../../hooks/useReadNotification";
import Header from "../../components/Header";
import { ArrowBack } from "@mui/icons-material";
import CustomLoader from "../../components/CustomLoader";

const NotificationDetailsPage = () => {
  const { notificationId } = useParams();
  const { notificationDetails, isLoading } =
    useReadNotification(notificationId);

  if (isLoading) return <CustomLoader />;
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
        <Header title="Notifications" />
        <Link
          to="/notifications"
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ArrowBack />}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              mb: "20px",
            }}
          >
            Back
          </Button>
        </Link>
        <Paper
          elevation={3}
          style={{
            padding: "16px",
            width: "250px",
            background: "#333",
            borderRadius: "15px",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h6" style={{ color: "#ffffff" }}>
            Notification Details
          </Typography>
          <Typography variant="body1" style={{ color: "#ffffff" }}>
            {notificationDetails.message}
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default NotificationDetailsPage;
