import { Box, Typography, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * EventsFinalCTA.jsx
 *
 * RESPONSABILIDAD:
 * - Cierre emocional y de conversión de la página Eventos Destino.
 *
 * OBJETIVO UX:
 * - Activar el siguiente paso SIN presión.
 * - Reforzar acompañamiento y confianza.
 *
 * OBJETIVO UI:
 * - Bloque limpio, respirado y elegante.
 * - Degradado suave con colores del manual de marca.
 */
export default function EventsFinalCTA() {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            sx={{
                borderRadius: 6,
                p: { xs: 3.5, md: 5 },
                textAlign: "center",

                /**
                 * Degradado suave:
                 * - Novia + Cielo
                 * - Elegante, no invasivo
                 */
                background:
                    "linear-gradient(180deg, rgba(255,253,219,0.9) 0%, rgba(197,237,237,0.7) 100%)",
                border: "1px solid rgba(42,49,53,0.08)",
            }}
        >
            {/* Acento script */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 24, md: 30 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                El siguiente paso
            </Typography>

            {/* Headline emocional */}
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 28, md: 40 },
                    mb: 1.5,
                }}
            >
                Hablemos de su celebración
            </Typography>

            {/* Subcopy */}
            <Typography
                sx={{
                    opacity: 0.85,
                    lineHeight: 1.7,
                    maxWidth: 820,
                    mx: "auto",
                    mb: 3,
                }}
            >
                Estamos aquí para acompañarlos desde la planeación hasta el gran momento,
                cuidando cada detalle para que ustedes solo disfruten.
            </Typography>

            {/* CTAs */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                justifyContent="center"
            >
                <Button
                    component={NavLink}
                    to="/contacto"
                    variant="contained"
                    size="large"
                    sx={{ px: 4, py: 1.2 }}
                >
                    Iniciar planeación
                </Button>

                <Button
                    component="a"
                    href="https://wa.me/5218445836644"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="large"
                    sx={{ px: 4, py: 1.2 }}
                >
                    Hablar por WhatsApp
                </Button>
            </Stack>
        </Box>
    );
}
