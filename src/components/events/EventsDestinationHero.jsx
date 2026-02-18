import { Box, Typography, Button, Stack, Container, Chip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Imagen del hero (recomendada: playa premium + mood editorial, NO altar literal)
import heroImg from "../../assets/images/events/events-hero.jpg";

/**
 * EventsDestinationHero.jsx
 *
 * HERO FULL WIDTH REAL (100vw) + bordes redondeados
 *
 * OBJETIVO UX:
 * - Dejar claro que es una página ESPECIALIZADA en eventos destino
 * - Mostrar variedad: bodas / XV's / bautizos / aniversarios
 * - Reducir ansiedad: “sin estrés”, “acompañamiento”, “logística de invitados”
 *
 * OBJETIVO UI:
 * - Look premium editorial (Silver)
 * - Overlay suave para legibilidad + atmósfera romántica
 * - Chips como “señal rápida” de tipos de evento (sin saturar)
 */
export default function EventsDestinationHero() {
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
                    minHeight: { xs: 520, md: 640 },
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
                {/* Overlay romántico premium
           - Usamos Tuxedo (oscuro) para contraste
           - un toque “Mar” suave (rgba) para mood elegante
        */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(42,49,53,0.65) 0%, rgba(60,127,144,0.25) 45%, rgba(42,49,53,0.72) 100%)",
                    }}
                />

                {/* Contenido */}
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
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        sx={{ maxWidth: 900 }}
                    >
                        {/* Acento script (marca) */}
                        <Typography
                            sx={{
                                fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                                fontSize: { xs: 26, md: 34 },
                                color: "rgba(255,253,219,0.95)", // Novia
                                mb: 1,
                            }}
                        >
                            Eventos Destino
                        </Typography>

                        {/* Headline principal */}
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
                            Celebraciones junto al mar, sin estrés
                        </Typography>

                        {/* Microcopy: amplia a más de bodas */}
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.86)",
                                lineHeight: 1.7,
                                fontSize: { xs: 16, md: 18 },
                                mb: 2.5,
                                maxWidth: 780,
                            }}
                        >
                            Bodas, XV’s, bautizos, aniversarios y eventos especiales.
                            Coordinamos hospedaje, traslados y la experiencia de invitados para que ustedes solo disfruten.
                        </Typography>

                        {/* Chips: “señal rápida” de tipos de evento (UX: scannable) */}
                        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mb: 3 }}>
                            {["Bodas", "XV’s", "Bautizos", "Aniversarios", "Grupos"].map((label) => (
                                <Chip
                                    key={label}
                                    label={label}
                                    size="small"
                                    sx={{
                                        borderRadius: 999,
                                        color: "#fff",
                                        borderColor: "rgba(255,255,255,0.35)",
                                        backgroundColor: "rgba(255,255,255,0.08)",
                                    }}
                                    variant="outlined"
                                />
                            ))}
                        </Stack>

                        {/* CTAs */}
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                            <Button
                                component={NavLink}
                                to="/contacto"
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ px: 4, py: 1.2 }}
                            >
                                Cotizar mi evento
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
