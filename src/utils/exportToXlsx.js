import { Workbook } from "exceljs";

async function exportToXlsx(data, headers, fileName) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Resultado de Cálculo de Empréstimo");

    worksheet.addRow(headers);

    data.forEach((element) => {
        worksheet.addRow(element);
    });

    workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const csvURL = window.URL.createObjectURL(blob);
        const tempLink = document.createElement("a");
        tempLink.href = csvURL;
        tempLink.setAttribute(
            "download",
            fileName + "-" + new Date().toISOString().split("T")[0] + ".xlsx",
        );
        tempLink.click();
    });
}

export { exportToXlsx };
