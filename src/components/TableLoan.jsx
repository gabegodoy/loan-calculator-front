import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import { toBRLMoney } from "../utils/masks";
import { formatDate } from "../utils/dateHelper";

export default function TableLoan() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "date", label: "Data Competência", format: (value) => formatDate(value) },
    { id: "loanAmount", label: "Valor de Empréstimo", format: (value) => toBRLMoney(value) },
    { id: "outstandingBalance", label: "Saldo Devedor", format: (value) => toBRLMoney(value) },
    { id: "consolidated", label: "Consolidada" },
    { id: "total", label: "Total", format: (value) => toBRLMoney(value) },
    { id: "amortization", label: "Amortização", format: (value) => toBRLMoney(value) },
    { id: "balance", label: "Saldo", format: (value) => toBRLMoney(value) },
    { id: "provision", label: "Provisão", format: (value) => toBRLMoney(value) },
    { id: "acumulated", label: "Acumulado", format: (value) => toBRLMoney(value) },
    { id: "paid", label: "Pago", format: (value) => toBRLMoney(value) },
  ];

  function createData(
    date,
    loanAmount,
    outstandingBalance,
    consolidated,
    total,
    amortization,
    balance,
    provision,
    acumulated,
    paid
  ) {
    return {
      date,
      loanAmount,
      outstandingBalance,
      consolidated,
      total,
      amortization,
      balance,
      provision,
      acumulated,
      paid,
    };
  }

  const rows = [
    createData(
      "2024-01-01",
      "140000.00",
      "140000.00",
      "",
      "0.00",
      "0.00",
      "140000.00",
      "0.00",
      "0.00",
      "0.00"
    ),
    createData(
      "2024-01-31",
      "0.00",
      "140791.58",
      "",
      "0.00",
      "0.00",
      "140000.00",
      "791.58",
      "791.58",
      "0.00"
    ),
    createData(
      "2024-02-15",
      "0.00",
      "138833.33",
      "1/120",
      "2355.71",
      "1166.67",
      "138833.33",
      "397.47",
      "0.00",
      "1189.05"
    ),
    createData(
      "2024-02-29",
      "0.00",
      "139199.11",
      "",
      "0.00",
      "0.00",
      "138833.33",
      "365.78",
      "365.78",
      "0.00"
    ),
    createData(
      "2024-03-15",
      "0.00",
      "137666.67",
      "2/120",
      "1925.41",
      "1166.67",
      "137666.67",
      "392.97",
      "0.00",
      "758.75"
    ),
    createData(
      "2024-03-31",
      "0.00",
      "138081.26",
      "",
      "0.00",
      "0.00",
      "137666.67",
      "414.59",
      "414.59",
      "0.00"
    ),
    createData(
      "2024-04-15",
      "0.00",
      "136500.00",
      "3/120",
      "1971.08",
      "1166.67",
      "136500.00",
      "389.82",
      "0.00",
      "804.41"
    ),
    createData(
      "2024-04-30",
      "0.00",
      "136885.35",
      "",
      "0.00",
      "0.00",
      "136500.00",
      "385.35",
      "385.35",
      "0.00"
    ),
    createData(
      "2024-05-15",
      "0.00",
      "135333.33",
      "4/120",
      "1938.46",
      "1166.67",
      "135333.33",
      "386.44",
      "0.00",
      "771.79"
    ),
    createData(
      "2024-05-31",
      "0.00",
      "135740.90",
      "",
      "0.00",
      "0.00",
      "135333.33",
      "407.57",
      "407.57",
      "0.00"
    ),
    createData(
      "2024-06-17",
      "0.00",
      "134166.67",
      "5/120",
      "2008.62",
      "1166.67",
      "134166.67",
      "434.38",
      "0.00",
      "841.95"
    ),
    createData(
      "2024-06-30",
      "0.00",
      "134494.87",
      "",
      "0.00",
      "0.00",
      "134166.67",
      "328.20",
      "328.20",
      "0.00"
    ),
    createData(
      "2024-01-01",
      "140000.00",
      "140000.00",
      "",
      "0.00",
      "0.00",
      "140000.00",
      "0.00",
      "0.00",
      "0.00"
    ),
    createData(
      "2024-01-31",
      "0.00",
      "140791.58",
      "",
      "0.00",
      "0.00",
      "140000.00",
      "791.58",
      "791.58",
      "0.00"
    ),
    createData(
      "2024-02-15",
      "0.00",
      "138833.33",
      "1/120",
      "2355.71",
      "1166.67",
      "138833.33",
      "397.47",
      "0.00",
      "1189.05"
    ),
    createData(
      "2024-02-29",
      "0.00",
      "139199.11",
      "",
      "0.00",
      "0.00",
      "138833.33",
      "365.78",
      "365.78",
      "0.00"
    ),
    createData(
      "2024-03-15",
      "0.00",
      "137666.67",
      "2/120",
      "1925.41",
      "1166.67",
      "137666.67",
      "392.97",
      "0.00",
      "758.75"
    ),
    createData(
      "2024-03-31",
      "0.00",
      "138081.26",
      "",
      "0.00",
      "0.00",
      "137666.67",
      "414.59",
      "414.59",
      "0.00"
    ),
    createData(
      "2024-04-15",
      "0.00",
      "136500.00",
      "3/120",
      "1971.08",
      "1166.67",
      "136500.00",
      "389.82",
      "0.00",
      "804.41"
    ),
    createData(
      "2024-04-30",
      "0.00",
      "136885.35",
      "",
      "0.00",
      "0.00",
      "136500.00",
      "385.35",
      "385.35",
      "0.00"
    ),
    createData(
      "2024-05-15",
      "0.00",
      "135333.33",
      "4/120",
      "1938.46",
      "1166.67",
      "135333.33",
      "386.44",
      "0.00",
      "771.79"
    ),
  ];

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                EMPRÉSTIMO
              </TableCell>
              <TableCell align="center" colSpan={2}>
                PARCELA
              </TableCell>
              <TableCell align="center" colSpan={2}>
                PRINCIPAL
              </TableCell>
              <TableCell align="center" colSpan={3}>
                JUROS
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ fontSize: ".8rem", textTransform: "capitalize", textAlign: "center", padding: ".25rem" }}
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.dataCompetencia}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          sx={{ fontSize: ".75rem" }}
                          key={column.id}
                          align={"center"}
                        >
                          {column.format
                            ? column.format(value)
                            : value }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
