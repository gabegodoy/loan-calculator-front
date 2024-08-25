import {
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { FormDatePicker, FormMaskedTextField } from "../components";
import { useForm } from "react-hook-form";
import { moneyMask, percentageMask } from "../utils/masks";
import ExportIcon from "../assets/export.svg";
import { stringToDate } from "../utils";

export default function CalculatorPage() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
    setValue,
    getValues,
    watch,
  } = useForm();

  let calculated = false;

  let initialDate = watch("initialDate");
  let endDate = watch("endDate");

  function formatLoanDetails(data) {
    return {
      endDate: stringToDate(data.endDate),
      firstPaymentDate: stringToDate(data.firstPaymentDate),
      initialDate: stringToDate(data.initialDate),
      interestRate: parseFloat(data.interestRate.replace(" %", "").replace(",", ".")),
      loanAmount: parseFloat(data.loanAmount.replace("R$ ", "").replace(".", "").replace(",", ".")
      ), 
    };
  }

  function onSubmit(data) {
    let filteredData = formatLoanDetails(data);
    console.log(filteredData);
  }
  function exportToExcel(data) {
    let filteredData = formatLoanDetails(data);
    console.log("Exporting data to Excel:", filteredData);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Toolbar sx={{ marginBottom: 3 }}>
        <Typography sx={{ fontWeight: 500 }} variant="h5">
          Calculadora de Empréstimos
        </Typography>
      </Toolbar>

      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <FormDatePicker
            name="initialDate"
            label="Data Inicial"
            control={control}
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
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
        <Grid item xs={12} md={2}>
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
        <Grid item xs={12} md={2}>
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
        <Grid item xs={12} md={2}>
          <Button
            sx={{ width: calculated ? "50%" : "100%", paddingY: "8px" }}
            type="submit"
            variant="contained"
            disabled={!isValid || isSubmitting}
          >
            Calcular
          </Button>
          {calculated ?? (
            <IconButton onClick={exportToExcel}>
              <Tooltip title="Clique para baixar a planilha">
                <img
                  src={ExportIcon}
                  className="logo"
                  alt="Clique para exportar a planilha"
                />
              </Tooltip>
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>

    // <h1>Hello World</h1>
  );
}
