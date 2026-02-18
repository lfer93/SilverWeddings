import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * DestinationsHighlights.jsx
 *
 * OBJETIVO UX:
 * - Mostrar destinos “top” rápidamente (lo que más busca el usuario)
 * - Dar un camino de conversión: “Cotizar este destino”
 * - Mantener look premium con cards consistentes
 *
 * NOTA:
 * - Usamos imágenes LOCALES (no URLs externas) para evitar fallas.
 */

// 1) Importamos imágenes locales (Vite las procesa y asegura que siempre carguen)
import losCabosImg from "../assets/images/destinations/los-cabos.jpg";
import rivieraMayaImg from "../assets/images/destinations/riviera-maya.jpg";
import cancunImg from "../assets/images/destinations/cancun.jpg";
// Opcional:
import pvImg from "../assets/images/destinations/puerto-vallarta.webp";

export default function DestinationsHighlights() {
    /**
     * Lista de destinos:
     * - Centralizamos contenido en un arreglo para escalabilidad
     * - Luego esta misma estructura se puede usar en la página /destinos
     */
    const destinations = [
        {
            name: "Los Cabos",
            image: losCabosImg,
            vibe: "Atardeceres dorados, resorts premium y vistas espectaculares.",
            tag: "Ideal para bodas elegantes",
        },
        {
            name: "Riviera Maya",
            image: rivieraMayaImg,
            vibe: "Playas turquesa, all-inclusive y experiencias completas.",
            tag: "Ideal para invitados y familia",
        },
        {
            name: "Cancún",
            image: cancunImg,
            vibe: "Gran conectividad, hoteles top y opciones para todo estilo.",
            tag: "Ideal para planeación rápida",
        },
        {
            name: "Puerto Vallarta",
            image: pvImg,
            vibe: "Romántico, cálido y con escenarios increíbles frente al mar.",
            tag: "Ideal para bodas íntimas",
        },
    ];

    return (
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
            {/* Encabezado */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 26, md: 32 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Destinos que enamoran.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "flex-end" },
                    justifyContent: "space-between",
                    gap: 2,
                    mb: { xs: 2.5, md: 3.5 },
                }}
            >
                <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40 } }}>
                    Explora nuestros destinos más buscados
                </Typography>

                {/* CTA secundaria hacia la página completa de destinos */}
                <Button component={NavLink} to="/destinos" variant="outlined">
                    Ver todos
                </Button>
            </Box>

            {/* =========================================================
          Grid CSS (igual que el fix anterior para que sea estable)
          - xs: 1
          - sm: 2
          - md: 4
         ========================================================= */}
            <Box
                sx={{
                    display: "grid",
                    gap: 20 / 8,
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(4, 1fr)",
                    },
                    alignItems: "stretch",
                }}
            >
                {destinations.map((d, index) => (
                    <Box
                        key={d.name}
                        component={motion.div}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
                        sx={{ display: "flex" }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 4,
                                overflow: "hidden",
                                backgroundColor: "background.paper",
                                border: "1px solid rgba(42,49,53,0.08)",
                            }}
                        >
                            {/* Imagen */}
                            <Box
                                sx={{
                                    height: 160,
                                    backgroundImage: `url(${d.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />

                            <CardContent sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column" }}>
                                <Typography
                                    sx={{
                                        fontFamily: "TT Commons Pro, sans-serif",
                                        fontWeight: 700,
                                        fontSize: 18,
                                        mb: 0.5,
                                    }}
                                >
                                    {d.name}
                                </Typography>

                                <Typography sx={{ color: "text.secondary", fontSize: 13, letterSpacing: "0.12em", mb: 1 }}>
                                    {d.tag.toUpperCase()}
                                </Typography>

                                <Typography sx={{ opacity: 0.85, lineHeight: 1.7, mb: 2 }}>
                                    {d.vibe}
                                </Typography>

                                {/* Empuja el botón hacia abajo para que todas las cards se vean uniformes */}
                                <Stack direction="row" sx={{ mt: "auto" }}>
                                    <Button
                                        component={NavLink}
                                        to="/contacto"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Cotizar este destino
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
