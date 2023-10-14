import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import navbarStyles from "./WrapperContainerStyles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Settings, Info, Home } from "@mui/icons-material";
import { Typography, Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";

const NavbarContainer = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState(5);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigate = (path) => () => {
    navigate(path);
    setDrawerOpen(false);
  };
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ...navbarStyles.iconButton, color: "#ffffff" }}
        onClick={toggleDrawer(true)}
      >
        <Badge color="error" badgeContent={notificationsCount}>
          <MenuIcon />
        </Badge>
      </IconButton>
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": navbarStyles.drawerPaper }}
      >
        <List sx={navbarStyles.list}>
          {/* <ListItem
            onClick={handleNavigate("/rides")}
            sx={{
              ...navbarStyles.listItem,
              border: `2px solid ${teal[500]}`,
              color: teal[500],
              mb: "80px",
              mt: "0px",
            }}
          >
            Let's take a ride!
          </ListItem> */}
          <ListItem>
            <Avatar alt="Profile" src="profile.jpg" sx={navbarStyles.logo} />
            <Typography color="white" sx={navbarStyles.logoText}>
              martijjx &reg;
            </Typography>
          </ListItem>
          <ListItem sx={{ ...navbarStyles.listItem, border: "none" }}>
            <Box sx={navbarStyles.box}>
              <IconButton color="secondary" onClick={handleNavigate("/")}>
                <Home />
              </IconButton>
              <Badge
                color="error"
                badgeContent={notificationsCount}
                onClick={handleNavigate("/notifications")}
              >
                <IconButton color="secondary">
                  <NotificationsIcon />
                </IconButton>
              </Badge>
              <IconButton color="secondary" onClick={handleNavigate("/about")}>
                <Info />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={handleNavigate("/settings")}
              >
                <Settings />
              </IconButton>
            </Box>
          </ListItem>
          <ListItem
            onClick={handleNavigate("/rides")}
            sx={navbarStyles.listItem}
          >
            Rides{" "}
          </ListItem>

          <ListItem
            onClick={handleNavigate("/login")}
            sx={navbarStyles.listItem}
          >
            Logout
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavbarContainer;
