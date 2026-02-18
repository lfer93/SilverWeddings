import { Box, Typography, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * FinalCTA.jsx
 *
 * OBJETIVO UX:
 * - Cierre emocional del Home
 * - Invitar a la conversación (no venta agresiva)
 * - Conectar con la ilusión del “gran día”
 *
 * TONO:
 * - Romántico, cálido, cercano
 * - Coherente con la misión de Silver Weddings
 */
export default function FinalCTA() {
    return (
        <Box
            sx={{
                mt: { xs: 6, md: 8 },
                py: { xs: 6, md: 8 },

                /**
                 * Fondo suave:
                 * - Usamos un degradado con colores de marca
                 * - No imagen para no competir con el Hero
                 */
                background:
                    "linear-gradient(180deg, rgba(255,253,219,1) 0%, rgba(197,237,237,0.7) 100%)",

                borderRadius: { xs: 0, md: 6 },
                textAlign: "center",
            }}
        >
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                sx={{
                    maxWidth: 720,
                    mx: "auto",
                    px: { xs: 2.5, md: 4 },
                }}
            >
                {/* Acento romántico */}
                <Typography
                    sx={{
                        fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                        fontSize: { xs: 26, md: 32 },
                        color: "text.secondary",
                        mb: 1,
                    }}
                >
                    El inicio de su historia
                </Typography>

                {/* Headline principal */}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: 32, md: 44 },
                        mb: 2,
                    }}
                >
                    Hablemos de su gran día
                </Typography>

                {/* Texto de apoyo */}
                <Typography
                    sx={{
                        fontSize: { xs: 16, md: 18 },
                        lineHeight: 1.75,
                        mb: 3,
                        maxWidth: 620,
                        mx: "auto",
                    }}
                >
                    Cuéntanos su idea, su estilo y lo que sueñan vivir.
                    Nosotros nos encargamos de acompañarlos en cada detalle,
                    para que su boda destino sea una experiencia perfecta y sin estrés.
                </Typography>

                {/* CTAs */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                    justifyContent="center"
                >
                    {/* CTA romántico (principal) */}
                    <Button
                        component={NavLink}
                        to="/contacto"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ px: 4, py: 1.3 }}
                    >
                        Hablemos de su gran día
                    </Button>

                    {/* CTA práctico (secundario) */}
                    <Button
                        component="a"
                        href="https://wa.me/5218445836644"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="large"
                        sx={{ px: 4, py: 1.3 }}
                    >
                        Escríbenos por WhatsApp
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
