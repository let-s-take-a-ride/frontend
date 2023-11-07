import React from "react";
import completeLoginHOC from "../../hooks/completeLoginHOC";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import CustomLoader from "../../components/CustomLoader";
const DashboardPage = ({ picture, isLoading }) => {
  const { username } = useSelector((state) => state.user);

  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <div style={{ color: "white" }}>
      <Typography color="white" sx={{ paddingTop: "2vh" }}>
        Hi {username}! <div>wanna try some ride?</div>
      </Typography>{" "}
      <img src={picture} alt={"testo"} />
    </div>
  );
};

export default completeLoginHOC(DashboardPage);
