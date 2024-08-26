import {
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { FormDatePicker, FormMaskedTextField, TableLoan } from "../components";
import { useForm } from "react-hook-form";
import { moneyMask, percentageMask, toBRLMoney } from "../utils/masks";
import ExportIcon from "../assets/export.svg";
import { stringToDate } from "../utils";
import { useState } from "react";
import { useAxios } from "../hooks/index";
import { useMutation } from "@tanstack/react-query";
import { calculateLoan } from "../services/loan";
import { exportToXlsx } from "../utils/exportToXlsx";
import { formatDate } from "../utils/dateHelper";

export default function CalculatorPage() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      endDate: null,
      firstPaymentDate: null,
      initialDate: null,
      interestRate: "",
      loanAmount: "",
    },
    mode: "onChange",
  });

  const [tableData, setTableData] = useState(null);

  let initialDate = watch("initialDate");
  let endDate = watch("endDate");

  function formatLoanDetails(data) {
    return {
      endDate: stringToDate(data.endDate),
      firstPaymentDate: stringToDate(data.firstPaymentDate),
      initialDate: stringToDate(data.initialDate),
      interestRate: parseFloat(
        data.interestRate.replace(" %", "").replace(",", ".")
      ),
      loanAmount: parseFloat(
        data.loanAmount.replace("R$ ", "").replace(".", "").replace(",", ".")
      ),
    };
  }

  function resetForm() {
    setTableData(null);
    reset();
  }
  const { axios } = useAxios();
  const mutation = useMutation({
    mutationFn: (filteredData) => calculateLoan(axios, filteredData),
    onSuccess: (data) => {
      setTableData(data);
    },
    onError: (err) => {
      console.error("Erro ao tentar calcular o empréstimo:", err);
    },
  });

  function onSubmit(data) {
    let filteredData = formatLoanDetails(data);
    mutation.mutate(filteredData);
  }

  function exportToExcel() {
    let dataForExcel = [];
    tableData
      .map((data) => ({
        date: formatDate(data.date),
        loanAmount: toBRLMoney(data.loanAmount),
        outstandingBalance: toBRLMoney(data.outstandingBalance),
        consolidated: data.consolidated,
        total: toBRLMoney(data.total),
        amortization: toBRLMoney(data.amortization),
        balance: toBRLMoney(data.balance),
        provision: toBRLMoney(data.provision),
        accumulated: toBRLMoney(data.accumulated),
        paid: toBRLMoney(data.paid),
      }))
      .forEach((row) => dataForExcel.push(Object.values(row)));

    let headers = [
      "Data de Competência",
      "Valor de Empréstimo",
      "Saldo Devedor",
      "Consolidada",
      "Total",
      "Amortização",
      "Saldo",
      "Provisão",
      "Acumulado",
      "Pago",
    ];

    exportToXlsx(dataForExcel, headers, "Cálculo empréstimo");
  }

  return (
    <Box
      sx={{ padding: 2, maxWidth: {lg: "1280px", xs:'100%'}, margin: "0 auto", height: "auto" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontWeight: 600,
            textAlign: "left",
            marginTop: 2,
          }}
          color={"secondary.main"}
          variant="h5"
        >
          Calculadora de Empréstimos
        </Typography>
        {tableData && (
          <IconButton
            sx={{ padding: "0", marginLeft: ".5rem" }}
            onClick={exportToExcel}
          >
            <Tooltip title="Clique para baixar a planilha">
              <img
                src={ExportIcon}
                className="icon__button"
                alt="Clique para baixar a planilha"
              />
            </Tooltip>
          </IconButton>
        )}
      </Box>
      <hr style={{ marginBottom: "2rem", opacity: 0.3 }} />
      <Grid container spacing={1} sx={{ marginBottom: 3 }}>
        <Grid item xs={6} md={2}>
          <FormDatePicker
            name="initialDate"
            label="Data Inicial"
            control={control}
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <FormDatePicker
            name="endDate"
            label="Data Final"
            control={control}
            minDate={initialDate}
            rules={{
              required: true,
              validate: (value) => {
                return (
                  value >= initialDate ||
                  "Data final deve ser posterior à data inicial"
                );
              },
            }}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <FormDatePicker
            name="firstPaymentDate"
            label="Primeiro Pagamento"
            control={control}
            minDate={initialDate}
            maxDate={endDate}
            rules={{
              required: true,
              validate: (value) => {
                return (
                  (value >= initialDate && value <= endDate) ||
                  "Primeiro pagamento deve estar entre a data inicial e data final"
                );
              },
            }}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <FormMaskedTextField
            mask={moneyMask}
            control={control}
            name="loanAmount"
            label="Valor de Empréstimo"
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormMaskedTextField
            mask={percentageMask}
            control={control}
            name="interestRate"
            label="Taxa de Juros"
            rules={{ required: true }}
          />
        </Grid>
        <Grid container justifyContent="space-between" item xs={12} md={2}>
          {tableData && (
            <Button
              sx={{ width: "48%", paddingY: "8px" }}
              variant="outlined"
              onClick={resetForm}
            >
              Limpar
            </Button>
          )}
          <Button
            sx={{ width: tableData ? "48%" : "100%", paddingY: "8px" }}
            type="submit"
            variant="contained"
            disabled={!isValid || isSubmitting}
          >
            Calcular
          </Button>
        </Grid>
      </Grid>
      {tableData && <TableLoan data={tableData}></TableLoan>}
    </Box>
  );
}
