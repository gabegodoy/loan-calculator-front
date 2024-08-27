import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CalculatorPage from "../pages/CalculatorPage";
import { describe, expect, it, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
vi.mock("axios", () => {
  return {
    default: {
      post: vi.fn(),
      get: vi.fn(),
      delete: vi.fn(),
      put: vi.fn(),
      create: vi.fn().mockReturnThis(),
      interceptors: {
        request: {
          use: vi.fn(),
          eject: vi.fn(),
        },
        response: {
          use: vi.fn(),
          eject: vi.fn(),
        },
      },
    },
  };
});
describe("CalculatorPage", () => {
  it("Renders the table component", async () => {
    const queryClient = new QueryClient();

    axios.post.mockResolvedValue({
      data: [
        {
          date: "2024-01-01",
          loanAmount: 140000,
          outstandingBalance: 140000,
          consolidated: null,
          total: 0,
          amortization: 0,
          balance: 140000,
          provision: 0,
          accumulated: 0,
          paid: 0,
        },
        {
          date: "2024-01-31",
          loanAmount: 0,
          outstandingBalance: 140816.6667,
          consolidated: null,
          total: 0,
          amortization: 0,
          balance: 140000,
          provision: 816.6667,
          accumulated: 816.6667,
          paid: 0,
        },
        {
          date: "2024-02-15",
          loanAmount: 0,
          outstandingBalance: 138833.3334,
          consolidated: "1/120",
          total: 2394.0486,
          amortization: 1166.6666,
          balance: 138833.3334,
          provision: 410.7153,
          accumulated: 0.0,
          paid: 1227.382,
        },
      ],
    });
    render(
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <CalculatorPage />
        </LocalizationProvider>
      </QueryClientProvider>
    );

    const inputEndDate = screen.getByLabelText("Data Final");
    const inputFirstPaymentDate = screen.getByLabelText("Primeiro Pagamento");
    const inputInitialDate = screen.getByLabelText("Data Inicial");
    const inputInterestRate = screen
      .getByTestId("interestRate")
      .querySelector("input");
    const inputLoanAmount = screen
      .getByTestId("loanAmount")
      .querySelector("input");

    fireEvent.change(inputEndDate, { target: { value: "01/01/2034" } });
    fireEvent.change(inputFirstPaymentDate, {
      target: { value: "15/02/2024" },
    });
    fireEvent.change(inputInitialDate, { target: { value: "01/01/2024" } });
    fireEvent.change(inputInterestRate, { target: { value: "7" } });
    fireEvent.change(inputLoanAmount, { target: { value: "140000" } });

    fireEvent.submit(screen.getByText("Calcular"));

    let payload = {
      endDate: "2034-01-01",
      firstPaymentDate: "2024-02-15",
      initialDate: "2024-01-01",
      interestRate: 7,
      loanAmount: 140000,
    };

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("/loan/calculate", payload);
      expect(screen.getByTestId("tableLoan")).toBeTruthy;
    });
  });
});
