import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/destinations/destinations-hero.jpg";

/**
 * DestinationsHero.jsx
 *
 * HERO FULL WIDTH REAL:
 * - Ocupa todo el ancho del viewport (100vw)
 * - Bordes redondeados visibles
 * - Contenido centrado con Container interno
 *
 * CLAVE:
 * - NO usamos Section aquí
 * - NO usamos padding lateral externo
 */
export default function DestinationsHero() {
    return (
        <Box
            sx={{
                width: "100vw",              // 👈 FULL WIDTH REAL
                position: "relative",
                left: "50%",
                right: "50%",
                ml: "-50vw",                 // 👈 rompe el contenedor padre
                mr: "-50vw",

                mt: { xs: 2, md: 3 },
            }}
        >
            {/* HERO VISUAL */}
            <Box
                sx={{
                    minHeight: { xs: 480, md: 600 },
                    borderRadius: { xs: 4, md: 6 }, // mismo radio que la landing
                    overflow: "hidden",             // CLAVE para que el radio funcione
                    position: "relative",
                    display: "grid",
                    alignItems: "center",

                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* OVERLAY */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(42,49,53,0.6) 0%, rgba(42,49,53,0.35) 50%, rgba(42,49,53,0.65) 100%)",
                    }}
                />

                {/* CONTENIDO (CENTRADO, NO LIMITA EL HERO) */}
                <Container
                    maxWidth="lg"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        py: { xs: 6, md: 9 },
                    }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        sx={{ maxWidth: 860 }}
                    >
                        <Typography
                            sx={{
                                fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                                fontSize: { xs: 26, md: 34 },
                                color: "rgba(255,253,219,0.95)",
                                mb: 1,
                            }}
                        >
                            Silver Weddings & Travel
                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: 34, md: 60 },
                                lineHeight: 1.05,
                                color: "#fff",
                                mb: 2,
                                fontWeight: 800,
                            }}
                        >
                            Diseñamos viajes que se sienten como una historia
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.85)",
                                lineHeight: 1.7,
                                fontSize: { xs: 16, md: 18 },
                                mb: 3,
                                maxWidth: 760,
                            }}
                        >
                            Escapadas románticas, viajes con amigos, vacaciones en familia o grupos.
                            Cuéntanos tu idea y armamos el plan ideal en México o en el extranjero.
                        </Typography>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                            <Button
                                component={NavLink}
                                to="/contacto"
                                variant="contained"
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
                                sx={{
                                    px: 4,
                                    py: 1.2,
                                    borderColor: "rgba(255,255,255,0.6)",
                                    color: "#fff",
                                    "&:hover": { borderColor: "#fff" },
                                }}
                            >
                                Eventos Destino
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
