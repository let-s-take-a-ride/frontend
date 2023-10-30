import React, { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
  List,
  Paper,
  CircularProgress,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";

import useRides from "../../hooks/useChoosenEvents";
import Header from "../../components/Header";

const MyRidesPage = () => {
  const [rideView, setRideView] = useState("attending");
  const { rides, loading, error } = useRides(rideView);

  const handleRideViewChange = (event, newRideView) => {
    if (newRideView !== null) {
      setRideView(newRideView);
    }
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
        <Header title="my rides" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <ToggleButtonGroup
            value={rideView}
            exclusive
            onChange={handleRideViewChange}
            sx={{ width: "300px", display: "flex", justifyContent: "center" }}
          >
            <ToggleButton value="attending" sx={{ width: "50%" }}>
              <Typography variant="button">Attending</Typography>
            </ToggleButton>
            <ToggleButton value="hosting" sx={{ width: "50%" }}>
              <Typography variant="button">Hosting</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
          {loading && <CircularProgress />}
          {error && <Typography color="error">{error.message}</Typography>}
          {!loading && !error && rides.length === 0 && (
            <Typography sx={{ color: "#ffffff" }}>
              No resources found
            </Typography>
          )}
          {!loading && !error && rides.length > 0 && (
            <>
              {/* <Typography variant="h6" sx={{ mt: 2, color: "#ffffff" }}>
                Here are your {rideView} rides
              </Typography> */}
              <List>
                {rides.map((ride) => (
                  <Link
                    to={`/rides/${ride.id}`}
                    key={ride.id}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        width: "100%",
                        minWidth: "250px",
                        borderRadius: "5px",
                        position: "relative",
                        mb: 2,
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
                          {new Date(ride.date).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Box p={2} pt={4}>
                        <Typography variant="h6" color="textSecondary">
                          {ride.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="div"
                          sx={{ mt: 1 }}
                        >
                          {ride.description}
                        </Typography>
                        <Box mt={2}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="div"
                          >
                            {`City: ${ride.city}`}
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
                          {`${ride.members_count} / ${ride.max_members}`}
                        </Typography>
                      </Box>
                    </Paper>
                  </Link>
                ))}
              </List>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MyRidesPage;
