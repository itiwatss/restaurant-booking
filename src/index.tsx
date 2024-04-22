import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./route";

// Apply font in MUI
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
