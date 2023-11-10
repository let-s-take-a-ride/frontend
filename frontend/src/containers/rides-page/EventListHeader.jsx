import React from "react";
import { Box, Grid, TextField, MenuItem, Button } from "@mui/material";

const EventListHeader = ({ setSearchQuery, setOrder, onCreate }) => {
  return (
    <Box sx={{ marginBottom: 1 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Search"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <TextField
            select
            label="Sort by"
            defaultValue="name"
            onChange={(e) => setOrder(e.target.value)}
            margin="dense"
            size="small"
            fullWidth
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="-name">Name (Descending)</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="-date">Date (Descending)</MenuItem>
          </TextField>
        </Grid>
        {/* <Grid item xs={12} sm={4} md={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={onCreate}
            fullWidth
            size="small"
          >
            Create Event
          </Button>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default EventListHeader;
