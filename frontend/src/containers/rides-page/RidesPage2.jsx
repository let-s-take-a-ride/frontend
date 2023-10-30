import React from "react";
import useEvents from "../../hooks/useEvents";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import EventListHeader from "./EventListHeader";
import Header from "../../components/Header";
const EventList = () => {
  const { events, loading, error, setOrder, setSearchQuery } = useEvents();
  const handleCreate = () => {
    // Tutaj można umieścić logikę obsługi tworzenia nowego eventu
    console.log("Create event button clicked");
  };
  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

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
        <Header title="rides" />
        <EventListHeader
          setSearchQuery={setSearchQuery}
          setOrder={setOrder}
          onCreate={handleCreate}
        />
        <List sx={{ width: "100%" }}>
          {events
            // .filter((event) => event.members_count < event.max_members)
            .map((event) => (
              <ListItem
                button
                key={event.id}
                onClick={() => (window.location.href = `/rides/${event.id}`)}
                sx={{ width: "100%", mb: 2, p: 0 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: "100%",
                    minWidth: "250px",
                    borderRadius: "5px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CalendarTodayIcon color="action" sx={{ mr: 0.5 }} />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                    >
                      {new Date(event.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Box p={2} pt={4}>
                    <Typography variant="h6" color="textSecondary">
                      {event.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                      sx={{ mt: 1 }}
                    >
                      {event.description}
                    </Typography>
                    <Box mt={2}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="div"
                      >
                        {`City: ${event.city}`}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PeopleIcon color="action" sx={{ mr: 0.5 }} />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                    >
                      {`${event.members_count} / ${event.max_members}`}
                    </Typography>
                  </Box>
                </Paper>
              </ListItem>
            ))}
        </List>
      </Box>
    </>
  );
};

export default EventList;
