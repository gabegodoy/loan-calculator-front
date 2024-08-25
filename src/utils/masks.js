import createNumberMask from "text-mask-addons/dist/createNumberMask";

export const moneyMask = createNumberMask({
    prefix: "R$ ",
    thousandsSeparatorSymbol: ".",
    decimalSymbol: ",",
    requireDecimal: true,
    allowDecimal: true,
});



export const percentageMask = createNumberMask({
    prefix: "",
    suffix: " %",
    thousandsSeparatorSymbol: ".",
    decimalSymbol: ",",
    allowDecimal: true,
    integerLimit: 4, // Allows up to 1000
    requireDecimal: false,
});