import { createMuiTheme } from "@material-ui/core/styles";

const turquoise = "#00D8D5";
const pink = "#FF4C8B";
const deepBlue = "#000426";
const white = "#FFFFFF";
const gray = "#F7F7F7";
const black = "#00010D";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    turquoise,
    pink,
    deepBlue,
    white,
    gray,
    black,
    primary: {
      main: deepBlue,
    },
    secondary: {
      main: pink,
    },
    background: {
      default: white,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1920,
    },
  },
  typography: {
    fontFamily: "Titillium Web, sans-serif",

    body1: {
      color: "#fff",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    h1: {
      color: "#fff",
      fontSize: "54px",
      fontWeight: "bold",
      lineHeight: "56px",
      "@media (min-width:600px)": {
        fontSize: "48px",
        fontWeight: "bold",
        lineHeight: "56px",
      },
    },
    ul: {
      color: "#fff",
    },
    h2: {
      color: "#fff",
      fontSize: "40px",
      fontWeight: "bold",
      lineHeight: "40px",
      "@media (min-width:600px)": {
        fontSize: "48px",
        fontWeight: "bold",
        lineHeight: "56px",
      },
    },
  },
  props: {
    MuiCard: {
      style: {
        padding: 32,
        boxShadow: "0 4px 8px #000 0.16",
      },
    },
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
    MuiListItem: {
      style: {
        color: "#fff",
      },
    },
    MuiTextField: {
      fullWidth: true,
      variant: "outlined",
      style: {
        margin: "16px 0",
      },
    },
  },
});

export default theme;
