import { Box, Typography } from "@mui/material";

/**
 * Footer (v1)
 * - Pie simple para validar estructura.
 * - Luego añadimos: redes, WhatsApp, destino destacados, etc.
 */
export default function Footer() {
    return (
        <Box sx={{ py: 3, textAlign: "center", opacity: 0.8 }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} Silver Weddings — Bodas destino en la playa.
            </Typography>
        </Box>
    );
}
