import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import "./App.css";
import { ptBR } from "date-fns/locale";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { light } from "./themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CalculatorPage } from "./pages";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <ThemeProvider theme={light}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
              <CalculatorPage />
              <Footer />
            </QueryClientProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </React.StrictMode>
  );
}

export default App;
