import { createTheme } from "@mui/material";
import { ptBR } from "@mui/material/locale";

export const dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#00C6B9",
        },
        background: {
            paper: "#161616",
            default: "#F9FAFC",
        },
    },
});

export const light = createTheme(
    {
        palette: {
            mode: "light",
            primary: {
                main: "#00C6B9",
                contrastText: "#FFFFFF",
            },
            secondary: {
                main: "#EAFDFB",
                contrastText: "#000000",
            },
            background: {
                paper: "#FFFFFF",
            },
        },
    },
    ptBR,
);

export default { light, dark };
