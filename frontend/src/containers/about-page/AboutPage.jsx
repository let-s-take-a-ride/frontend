import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Box, Paper } from "@mui/material";
const AboutPage = () => {
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
        <Header title="about" />
        <Paper
          elevation={3}
          style={{
            width: "300px",
            padding: "16px",
            margin: "1px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
          metus, porta sit amet nibh placerat, iaculis dignissim lacus. Duis
          posuere sapien eu dui gravida fringilla. Donec sit amet augue
          consectetur nunc egestas tempor. Suspendisse neque odio, aliquam eget
          posuere sit amet, tincidunt id quam. Quisque nec sollicitudin mauris,
          sed convallis metus. Nullam vel luctus velit, quis porttitor massa. In
          eget diam ligula. Integer justo sapien, consequat a sem id, gravida
          aliquam odio. Mauris fringilla sollicitudin ornare. Donec sed leo nec
          nunc vestibulum venenatis. Mauris vel dolor rhoncus ligula maximus
          dignissim in et libero. Cras elit justo, elementum hendrerit bibendum
          vitae, feugiat ac quam. Nam mi massa, cursus quis turpis nec.
        </Paper>
      </Box>
    </>
  );
};

export default AboutPage;
