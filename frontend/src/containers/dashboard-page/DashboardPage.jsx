import React from "react";
import completeLoginHOC from "../../hooks/completeLoginHOC";

const DashboardPage = ({ picture, isLoading }) => {
  if (isLoading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }
  return (
    <div style={{ color: "white" }}>
      <img src={picture} alt={"testo"} />
    </div>
  );
};

export default completeLoginHOC(DashboardPage);
