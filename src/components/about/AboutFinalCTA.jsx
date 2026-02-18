import { Box, Typography, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * AboutFinalCTA.jsx
 *
 * UX:
 * - Cierre emocional de la página Nosotros.
 * - Ofrece dos caminos claros:
 *   1) Eventos destino
 *   2) Viajes generales
 *
 * UI:
 * - Bloque editorial limpio, elegante y respirado.
 * - Degradado suave con colores de marca (Novia + Cielo).
 * - Dos CTAs bien diferenciados pero equilibrados.
 */
export default function AboutFinalCTA() {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            sx={{
                borderRadius: 6,
                p: { xs: 3.5, md: 5 },
                textAlign: "center",
                background:
                    "linear-gradient(180deg, rgba(255,253,219,0.9) 0%, rgba(197,237,237,0.75) 100%)",
                border: "1px solid rgba(42,49,53,0.08)",
            }}
        >
            {/* Acento editorial */}
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

            {/* Headline principal */}
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 28, md: 40 },
                    mb: 1.5,
                }}
            >
                Estamos listos para acompañarte
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
                Ya sea que estés planeando un evento especial o simplemente quieras vivir un viaje bien pensado,
                estamos aquí para ayudarte a hacerlo con calma, claridad y emoción.
            </Typography>

            {/* Botones */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                justifyContent="center"
            >
                {/* CTA Eventos */}
                <Button
                    component={NavLink}
                    to="/bodas" // o /eventos-destino si luego renombras la ruta
                    variant="contained"
                    size="large"
                    sx={{ px: 4, py: 1.2 }}
                >
                    Planea tu evento destino
                </Button>

                {/* CTA Viajes */}
                <Button
                    component={NavLink}
                    to="/destinos"
                    variant="outlined"
                    size="large"
                    sx={{ px: 4, py: 1.2 }}
                >
                    Descubre tu próximo viaje
                </Button>
            </Stack>
        </Box>
    );
}
