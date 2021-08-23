import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#795a59",
    },
  },
});

const ButtonUI = ({ type, onClick, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonUI;
