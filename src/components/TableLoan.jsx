/* eslint-disable react/prop-types */
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

export default function TableLoan({ data }) {
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
    { id: "accumulated", label: "Acumulado", format: (value) => toBRLMoney(value) },
    { id: "paid", label: "Pago", format: (value) => toBRLMoney(value) },
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
            {data
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
