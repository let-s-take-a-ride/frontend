import { createTheme } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import { darkPalette } from "./variables";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      dark: grey[900],
    },
    secondary: {
      main: "#1F7A8C",
      dark: "#115363",
    },
    tertiary: {
      main: teal["A400"],
      dark: teal["A700"],
    },
    quartary: {
      main: "#0A3F4F",
      dark: "#022B3A",
    },
    pentary: {
      main: "#FFFFFF",
      dark: "#FFFFFF",
    },
    hexary: {
      main: "#555555",
      dark: "#555555",
    },
    // text: {
    //   primary: "#ffffff", // white color
    // },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "0",
          borderRadius: "12px",
          backgroundColor: darkPalette.primary,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          ".MuiSlider-track": {
            backgroundColor: darkPalette.hexary,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px", // Adjust according to your preference
          textTransform: "none",
          color: "white",
          "&.Mui-selected": {
            backgroundColor: "white",
            color: "yourDesiredColorForSelectedState",
            "&:hover": {
              backgroundColor: "white",
              color: "yourDesiredColorForHoverState",
            },
          },
          "&:hover": {
            backgroundColor: "white",
            color: "yourDesiredColorForHoverState",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: darkPalette.hexary,
            },
            "&.Mui-focused fieldset": {
              borderColor: darkPalette.hexary,
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
        },
      },
    },
  },
});
