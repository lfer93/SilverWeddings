import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Imagen editorial (recomendada: travel lifestyle premium, no boda literal)
import heroImg from "../../assets/images/about/about-hero.jpg";

/**
 * AboutHero.jsx
 *
 * OBJETIVO UX:
 * - Presentar a Silver como “cómplice” y especialista (confianza).
 * - Aclarar: viajes + eventos destino.
 * - CTA claro al final (sin presión).
 *
 * OBJETIVO UI:
 * - Hero full width real (100vw) + bordes redondeados como tus otros heroes.
 * - Overlay elegante para legibilidad.
 */
export default function AboutHero() {
    return (
        <Box
            sx={{
                width: "100vw",
                position: "relative",
                left: "50%",
                right: "50%",
                ml: "-50vw",
                mr: "-50vw",
                mt: { xs: 2, md: 3 },
            }}
        >
            <Box
                sx={{
                    minHeight: { xs: 520, md: 620 },
                    borderRadius: { xs: 4, md: 6 },
                    overflow: "hidden",
                    position: "relative",
                    display: "grid",
                    alignItems: "center",
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay premium: Tuxedo + toque Mar */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(42,49,53,0.7) 0%, rgba(60,127,144,0.22) 50%, rgba(42,49,53,0.75) 100%)",
                    }}
                />

                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 9 } }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        sx={{ maxWidth: 900 }}
                    >
                        <Typography
                            sx={{
                                fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                                fontSize: { xs: 26, md: 34 },
                                color: "rgba(255,253,219,0.95)", // Novia
                                mb: 1,
                            }}
                        >
                            Sobre Silver
                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: 34, md: 60 },
                                lineHeight: 1.05,
                                color: "#fff",
                                fontWeight: 800,
                                mb: 2,
                            }}
                        >
                            Más que una agencia: su cómplice de viaje y celebración
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.86)",
                                lineHeight: 1.7,
                                fontSize: { xs: 16, md: 18 },
                                maxWidth: 780,
                                mb: 3,
                            }}
                        >
                            Diseñamos experiencias en destino para parejas, familias y grupos. Y cuando se trata de un evento especial,
                            los acompañamos desde la planeación hasta el gran momento para que todo salga bien, sin estrés.
                        </Typography>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
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
                                component={NavLink}
                                to="/destinos"
                                variant="outlined"
                                size="large"
                                sx={{
                                    px: 4,
                                    py: 1.2,
                                    borderColor: "rgba(255,255,255,0.6)",
                                    color: "#fff",
                                    "&:hover": { borderColor: "#fff" },
                                }}
                            >
                                Ver Destinos
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
