import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import useNotifications from "../../hooks/useNotifications";
import CustomLoader from "../../components/CustomLoader";
import Header from "../../components/Header";
import { formatDistanceToNow, parseISO } from "date-fns";

const NotificationsPage = () => {
  const { notifications, isLoading } = useNotifications();

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
        <Header title="Notifications" />
        <List>
          {notifications &&
            notifications.map((notification) => (
              <Link
                to={`/notifications/${notification.id}`}
                key={notification.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem>
                  <Paper
                    elevation={3}
                    style={{
                      width: "300px",
                      padding: "16px",
                      margin: "1px",
                      backgroundColor: notification.is_read ? "gray" : "white",
                    }}
                  >
                    <ListItemText
                      primary={
                        notification.message.length > 35
                          ? `${notification.message.slice(0, 35)}...`
                          : notification.message
                      }
                      secondary={`Created ${formatDistanceToNow(
                        parseISO(notification.created_at),
                        { addSuffix: true }
                      )}`}
                    />
                  </Paper>
                </ListItem>
              </Link>
            ))}
        </List>
        {/* <Notifications /> */}
      </Box>
    </>
  );
};

export default NotificationsPage;
