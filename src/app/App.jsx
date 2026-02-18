import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme";
import { router } from "./router";

/**
 * App.jsx
 * - ThemeProvider: aplica la identidad visual (colores, tipografía, estilos MUI)
 * - CssBaseline: reseteo consistente
 * - RouterProvider: activa las rutas multipágina
 */
export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
