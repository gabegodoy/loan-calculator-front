import { createTheme } from "@mui/material";
import { ptBR } from "@mui/material/locale";

export const dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#000",
            contrastText: "#000000",
        },
        background: {
            paper: "#161616",
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '.85rem',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    border: 'solid #FFFFFF0D 1px'
                },
            },
        },
    }
});

export const light = createTheme(
    {
        palette: {
            mode: "light",
            primary: {
                main: "#0e6dff",
                contrastText: "#FFFFFF",
            },
            secondary: {
                main: "#34568b",
                contrastText: "#000000",
            },
            background: {
                paper: "#FFFFFF",
            },
        },
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontSize: '.85rem',
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        border: 'solid #ffffff0D 1px',
                        background: '#34568b',
                        color: '#fff',
                    },
                },
            },
        }
    },
    ptBR,
);

export default { light, dark };
