import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: { default: "#121212" },
  },
  typography: {
    fontFamily: "'Actor', sans-serif",
    h1: {
      fontSize: 72,
      lineHeight: "72px",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    h4: {
      fontSize: 34,
      lineHeight: "48px",
      fontWeight: 400,
      letterSpacing: "0.25px",
    },
    h5: {
      fontSize: 26,
      lineHeight: "32px",
      fontWeight: 400,
      letterSpacing: "0.25px",
    },
    h6: {
      fontSize: 20,
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: "0.2px",
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: "0.25px",
    },
    body2: {
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: "0.25px",
    },
    button: {
      fontSize: 14,
      lineHeight: "16px",
      fontWeight: 600,
      letterSpacing: "0.5px",
      textTransform: "none",
    },
    caption: {
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 400,
      letterSpacing: "0.3px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "& .MuiPaper-rounded.MuiAccordion-root": {
            borderRadius: "40px",
            color: "#f4f4f4",
            background: "#282828",
            boxShadow:
              "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "8px 16px 26px",
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        TransitionProps: { unmountOnExit: true },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          "& .MuiBox-root": {
            borderRadius: "12px",
          },
        },
      },
    },
  },
});
