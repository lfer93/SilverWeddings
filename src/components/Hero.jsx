import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-beach-wedding.jpg";

/**
 * Hero.jsx (v2)
 *
 * Fixes:
 * 1) Imagen: usamos una URL directa y estable (no "source.unsplash.com" que a veces falla).
 * 2) Full-bleed: rompe el Container del layout para que el Hero abarque todo el ancho.
 * 3) Full-height: ocupa alto de pantalla (menos el navbar).
 * 4) Overlay: mucho más sutil. La legibilidad la resolvemos con una "glass card" detrás del texto.
 */
export default function Hero() {
    /**
     * Imagen de stock temporal:
     * - URL directa (estable) para evitar pantallas en blanco.
     * - Después la reemplazamos por una imagen propia o descargada localmente.
     */

    return (
        <Box
            /**
             * FULL-BLEED TRICK:
             * - Como nuestro layout usa <Container maxWidth="lg">, el contenido normalmente
             *   queda centrado y con ancho limitado.
             * - Para que el Hero sea "de orilla a orilla", usamos:
             *   width: 100vw + left 50% + translateX(-50%)
             */
            sx={{
                position: "relative",
                width: "100vw",
                left: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden",

                /**
                 * Full-height:
                 * - 100vh = alto total de pantalla
                 * - Restamos aprox el alto del navbar (ajustable)
                 * - Si tu navbar cambia de alto, ajustamos este número.
                 */
                minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 72px)" },

                /**
                 * Bordes:
                 * - En móvil normalmente se ve mejor sin bordes redondeados (full screen).
                 * - En desktop sí se siente premium con esquinas suaves.
                 */
                borderRadius: { xs: 0, md: 6 },

                display: "flex",
                alignItems: "center",
            }}
        >
            {/* =========================================================
          1) FONDO (imagen)
         ========================================================= */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.02)",
                }}
            />

            {/* =========================================================
          2) OVERLAY SUAVE
          - Antes era un degradado fuerte y se sentía “muy grande”.
          - Ahora solo oscurecemos levemente la imagen para darle coherencia.
         ========================================================= */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(42,49,53,0.18)", // Tuxedo muy suave
                }}
            />

            {/* =========================================================
          3) CONTENIDO
          - Usamos una "glass card" detrás del texto para legibilidad
          - Así NO necesitamos oscurecer toda la imagen
         ========================================================= */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                sx={{
                    position: "relative",
                    width: "100%",
                    px: { xs: 2.5, sm: 4, md: 8 },
                }}
            >
                {/* Card de contenido (glass / editorial) */}
                <Box
                    sx={{
                        maxWidth: 760,
                        p: { xs: 3, sm: 4.5 },
                        borderRadius: { xs: 4, md: 6 },

                        /**
                         * Fondo semitransparente con blur:
                         * - Mucho más premium que un overlay enorme.
                         * - Mantiene la foto visible.
                         */
                        backgroundColor: "rgba(42,49,53,0.48)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,253,219,0.18)", // Novia muy sutil
                    }}
                >
                    {/* Acento de marca (script) */}
                    <Typography
                        sx={{
                            fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                            fontSize: { xs: 26, md: 40 },
                            mb: 1,
                            color: "#FFFDDB", // Novia
                        }}
                    >
                        Tu cómplice para llegar al altar junto al mar.
                    </Typography>

                    {/* Headline */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: 36, sm: 44, md: 64 },
                            lineHeight: 1.03,
                            mb: 2,
                            color: "#FFFDDB",
                        }}
                    >
                        Bodas destino en la playa, sin estrés.
                    </Typography>

                    {/* Texto de apoyo (misión) */}
                    <Typography
                        sx={{
                            fontSize: { xs: 16, md: 18 },
                            lineHeight: 1.75,
                            maxWidth: 640,
                            color: "rgba(255,253,219,0.92)",
                            mb: 3,
                        }}
                    >
                        Desde la planeación hasta la llegada al altar, cuidamos cada detalle para que vivan
                        una experiencia perfecta y sin estrés — y creen memorias que permanezcan.
                    </Typography>

                    {/* CTAs */}
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                        <Button
                            component={NavLink}
                            to="/contacto"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ px: 3, py: 1.2, boxShadow: "0 10px 24px rgba(0,0,0,0.25)" }}
                        >
                            Agendar llamada
                        </Button>

                        <Button
                            component={NavLink}
                            to="/destinos"
                            variant="outlined"
                            size="large"
                            sx={{
                                px: 3,
                                py: 1.2,
                                borderColor: "rgba(255,253,219,0.7)",
                                color: "#FFFDDB",
                                "&:hover": {
                                    borderColor: "#FFFDDB",
                                    backgroundColor: "rgba(255,253,219,0.10)",
                                },
                            }}
                        >
                            Ver destinos
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
