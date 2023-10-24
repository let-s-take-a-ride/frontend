import React from "react";
import completeLoginHOC from "../../hooks/completeLoginHOC";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
const DashboardPage = ({ picture, isLoading }) => {
  const { username } = useSelector((state) => state.user);

  if (isLoading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }
  return (
    <div style={{ color: "white" }}>
      <Typography color="white" sx={{ paddingTop: "2vh" }}>
        Hi {username}!
      </Typography>{" "}
      <img src={picture} alt={"testo"} />
    </div>
  );
};

export default completeLoginHOC(DashboardPage);
