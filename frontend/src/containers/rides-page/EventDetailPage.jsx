import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAxiosInstance } from "../../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Paper, Box } from "@mui/material";
import { useSelector} from "react-redux";
import { Typography, Avatar } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import Header from "../../components/Header";
import CustomSnackbar from "../../components/CustomSnackbar";
const EventDetailPage = () => {
  const { rideId } = useParams(); 
  const [eventDetails, setEventDetails] = useState(null);
  const [isUserAMember, setIsUserAMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const { id } = useSelector((state) => state.user);

  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        // Assuming you're using the getAxiosInstance and getAccessTokenSilently like in your given code
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.get(`events/${rideId}`);
        setEventDetails(response.data);
        // setIsUserAMember(response.data.members.includes(user.sub));
        const memberUserIds = response.data.memberships.map(
          (membership) => membership.user
        );

        console.log(response.data);
        setIsOwner(response.data.owner === id);
        console.log(memberUserIds + " mem user ids");
        console.log(id + " user");

        console.log(response.data.owner === id);

        setIsUserAMember(memberUserIds.includes(parseInt(id)));
      } catch (error) {
        console.error("Failed to fetch event details:", error);
      }
    };

    fetchEventDetails();
  }, [rideId, isUserAMember]);

  const handleAttend = async () => {
    try {
      const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
      const response = await axiosInstance.post(`events/${rideId}/attend/`, {
        userId: user.sub,
      });
      setOpen(true);
      setResponse("Successfully attended!");
      setIsUserAMember(true);
    } catch (error) {
      console.error("Failed to attend:", error);
      setOpen(true);
      setResponse("Something went wrong :(");
    }
  };

  const handleResign = async () => {
    try {
      const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
      const response = await axiosInstance.post(`events/${rideId}/resign/`, {
        userId: user.sub,
      });

      setOpen(true);
      setResponse("Successfully resigned!");
      setIsUserAMember(false);
    } catch (error) {
      console.error("Failed to resign:", error);
      setOpen(true);
      setResponse("Something went wrong :(");
    }
  };

  const handleClose = () => {
    setResponse("");
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "250px",
          // height: "100%",
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

        <Header title="Ride details" />

        {eventDetails ? (
          <>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                // height: "100%",
                borderRadius: "5px",
              }}
            >
              <Avatar
                alt="Event Photo"
                src={eventDetails.photo}
                sx={{
                  width: "100%",
                  height: "33vh",
                  borderRadius: "0",
                  opacity: 0.9,
                }}
              />
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 5,
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
                    {`${eventDetails.members_count} / ${eventDetails.max_members}`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 5,
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
                    {new Date(eventDetails.date).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
              <Box p={2} pt={4}>
                <Typography variant="h6" color="textSecondary">
                  {eventDetails.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  sx={{ mt: 1 }}
                >
                  {eventDetails.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  sx={{ mt: 1 }}
                >
                  {`City: ${eventDetails.city}`}
                </Typography>
              </Box>
            </Paper>
            {/* {isUserAMember ? (
              <Button onClick={handleResign}>Resign</Button>
            ) : (
              <Button onClick={handleAttend}>Attend</Button>
            )} */}
            <Box pt={4}> </Box>
            {isUserAMember && !isOwner && (
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                size="small"
                onClick={handleResign}
              >
                Resign
              </Button>
            )}
            {!isUserAMember && !isOwner && (
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                size="small"
                onClick={handleAttend}
              >
                Attend
              </Button>
            )}
          </>
        ) : (
          "Loading..."
        )}
      </Box>
    </>
  );
};

export default EventDetailPage;
