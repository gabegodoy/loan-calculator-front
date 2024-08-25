import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { ToastProvider } from "use-toast-mui";

import "./App.css";
import { ptBR } from "date-fns/locale";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { light } from "./themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CalculatorPage } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <ThemeProvider theme={light}>
          {/* <ToastProvider> */}
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
              <CalculatorPage />
            </QueryClientProvider>
          {/* </ToastProvider> */}
        </ThemeProvider>
      </LocalizationProvider>
    </React.StrictMode>
  );
}

export default App;
