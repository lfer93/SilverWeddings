import { createTheme } from "@mui/material/styles";

/* =========================================================
   theme.js
   - Tema global de MUI
   - Centraliza paleta, tipografía, bordes, estilos por defecto
   - Así todo se ve “Silver Weddings” desde el inicio
   ========================================================= */

export const theme = createTheme({
    palette: {
        mode: "light",

        primary: { main: "#3C7F90" },   // Mar
        secondary: { main: "#D1B78F" }, // Arena

        background: {
            default: "#FFFDDB", // Novia
            paper: "#D0D6DB",   // Diamante
        },

        text: {
            primary: "#2A3135",   // Tuxedo
            secondary: "#3C7F90", // Mar como secundario
        },

        info: { main: "#C5EDED" }, // Cielo
    },

    shape: {
        borderRadius: 16,
    },

    typography: {
        /* Fuente base (cuerpo) */
        fontFamily: [
            "TT Commons Pro",
            "system-ui",
            "-apple-system",
            "Segoe UI",
            "Roboto",
            "Arial",
            "sans-serif",
        ].join(","),

        /* Headings más “marca” usando Typhone */
        h1: { fontFamily: "Typhone, TT Commons Pro, sans-serif", fontWeight: 400 },
        h2: { fontFamily: "Typhone, TT Commons Pro, sans-serif", fontWeight: 400 },
        h3: { fontFamily: "Typhone, TT Commons Pro, sans-serif", fontWeight: 400 },

        /* Acentos: para subtítulos cortos, frases, detalles */
        subtitle1: { fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif' },
        subtitle2: { fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif' },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },

    components: {
        /* Estilos por defecto para que el look sea premium */
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999, // botón tipo “pill”
                },
            },
        },
    },
});
