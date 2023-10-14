import { grey } from "@mui/material/colors";
const navbarStyles = {
  drawerPaper: {
    width: "350px",
    minWidth: "350px",
    boxSizing: "border-box",
    backgroundColor: grey[900],
    // display: "flex",
    // justifyContent: "center",
  },
  logo: {
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "50px",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  list: {
    width: "350px",
    padding: "45px",
    backgroundColor: grey[900],
    color: "white",
  },
  listItem: {
    justifyContent: "center",
    margin: "15px 0",
    padding: "12px 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    border: "1px solid white",
    borderRadius: "6px",
  },
  iconButton: {
    margin: "8px",
    position: "fixed",
  },
};

export default navbarStyles;
