import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * FeaturedDestinations.jsx
 *
 * RESPONSABILIDAD:
 * - Mostrar los destinos más cotizados (pero ahora desde un ángulo “viajes”)
 *
 * CAMBIO UX/UI (IMPORTANTE):
 * - Antes: tono 100% bodas/parejas (“gran día”, “altar”, etc.)
 * - Ahora: tono general (viajes, amigos, familia, grupos y también eventos)
 *
 * OBJETIVO UX:
 * - Inspirar + orientar rápidamente (3 destinos top de playa)
 * - Evitar que el usuario piense “solo hacen bodas”
 * - CTA más neutro: “Armar mi viaje” (conversión sin presión)
 */

// Imágenes locales (Vite las optimiza y evita links rotos)
import cancunImg from "../../assets/images/destinations/cancun.jpg";
import cabosImg from "../../assets/images/destinations/los-cabos.jpg";
import vallartaImg from "../../assets/images/destinations/puerto-vallarta.webp";

export default function FeaturedDestinations() {
    /**
     * Datos (curados por el cliente)
     * - Copy general: aplica para vacaciones, grupos y también celebraciones.
     * - Evitamos palabras demasiado “wedding-only”.
     */
    const destinations = [
        {
            name: "Cancún & Riviera Maya",
            image: cancunImg,
            description:
                "Playas de arena blanca, aguas turquesa y una gran variedad de resorts all-inclusive para viajes en pareja, con amigos o en grupo.",
        },
        {
            name: "Los Cabos",
            image: cabosImg,
            description:
                "Paisajes espectaculares, atardeceres increíbles y experiencias premium para una escapada inolvidable o un viaje especial.",
        },
        {
            name: "Puerto Vallarta",
            image: vallartaImg,
            description:
                "Un destino cálido y auténtico: playa, gastronomía y ambiente relajado, ideal para vacaciones y celebraciones con estilo.",
        },
    ];

    return (
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
            {/* Encabezado (tono general) */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 26, md: 32 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Destinos más cotizados
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 32, md: 42 },
                    mb: 1.5,
                }}
            >
                Viajes que se convierten en historias
            </Typography>

            {/* Micro-copy UX: aclara que es para viajes en general */}
            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 900, mb: 4 }}>
                Ya sea una escapada romántica, un viaje con amigos, vacaciones en familia o una celebración especial,
                te ayudamos a armar el plan ideal según tu estilo y presupuesto.
            </Typography>

            {/* Grid estable (consistente con tu sistema visual) */}
            <Box
                sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(3, 1fr)",
                    },
                }}
            >
                {destinations.map((d, index) => (
                    <Box
                        key={d.name}
                        component={motion.div}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                borderRadius: 4,
                                overflow: "hidden",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid rgba(42,49,53,0.08)",
                                backgroundColor: "background.paper",
                            }}
                        >
                            {/* Imagen */}
                            <Box
                                sx={{
                                    height: 220,
                                    backgroundImage: `url(${d.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />

                            <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
                                <Typography sx={{ fontWeight: 800, fontSize: 20, mb: 1 }}>
                                    {d.name}
                                </Typography>

                                <Typography sx={{ opacity: 0.85, lineHeight: 1.7, mb: 3 }}>
                                    {d.description}
                                </Typography>

                                {/* CTA neutro (viajes) */}
                                <Button
                                    component={NavLink}
                                    to="/contacto"
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: "auto" }}
                                >
                                    Armar mi viaje
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
