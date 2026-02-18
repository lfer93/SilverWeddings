import { Box, Typography, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * AnyDestinationCTA.jsx
 *
 * RESPONSABILIDAD:
 * - Cierre de la página “Destinos” (general)
 *
 * OBJETIVO UX (por qué existe):
 * - Evitar el pensamiento: “si no está aquí, entonces no lo cotizan”
 * - Capturar leads de:
 *   - viajes normales (vacaciones)
 *   - viajes con amigos / familia
 *   - grupos
 *   - celebraciones (sin enfocarlo 100% a bodas)
 *
 * OBJETIVO UI:
 * - Sección premium y respirada (mucho aire)
 * - Degradado suave con colores del manual (sin saturación)
 * - CTAs claros y amables (no agresivos)
 */
export default function AnyDestinationCTA() {
    return (
        <Box sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 4, md: 6 } }}>
            {/* 
        motion.div:
        - Animación sutil de entrada para modernidad
        - viewport once: no se repite al hacer scroll arriba/abajo
      */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                sx={{
                    /**
                     * Fondo:
                     * - Usamos colores de marca en un degradado MUY sutil
                     * - Novia (suave) + Cielo (suave) para sensación elegante
                     */
                    background:
                        "linear-gradient(180deg, rgba(255,253,219,0.9) 0%, rgba(197,237,237,0.6) 100%)",

                    border: "1px solid rgba(42,49,53,0.08)", // Tuxedo muy suave
                    borderRadius: { xs: 4, md: 6 },
                    p: { xs: 3, md: 5 },
                    textAlign: "center",
                }}
            >
                {/* Acento script (romántico/editorial) */}
                <Typography
                    sx={{
                        fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                        fontSize: { xs: 24, md: 30 },
                        color: "text.secondary",
                        mb: 1,
                    }}
                >
                    ¿No ves tu destino?
                </Typography>

                {/* Headline claro y general */}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: 28, md: 40 },
                        mb: 1.5,
                    }}
                >
                    Cotizamos a cualquier destino
                </Typography>

                {/* Copy de apoyo (general, no solo bodas) */}
                <Typography
                    sx={{
                        opacity: 0.85,
                        lineHeight: 1.7,
                        maxWidth: 860,
                        mx: "auto",
                        mb: 3,
                    }}
                >
                    Ya sea una escapada, vacaciones en familia, un viaje con amigos o una celebración especial,
                    te ayudamos a diseñar el plan ideal en México o en el extranjero. Cuéntanos tu idea y lo armamos contigo.
                </Typography>

                {/* CTAs:
           - Primario: conversación (baja fricción)
           - Secundario: puente a Eventos Destino (para quien ya viene con intención de evento)
        */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                    justifyContent="center"
                >
                    <Button
                        component={NavLink}
                        to="/contacto"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ px: 4, py: 1.2 }}
                    >
                        Cuéntanos tu plan
                    </Button>

                    <Button
                        component={NavLink}
                        to="/eventos-destino"
                        variant="outlined"
                        size="large"
                        sx={{ px: 4, py: 1.2 }}
                    >
                        Ver Eventos Destino
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
