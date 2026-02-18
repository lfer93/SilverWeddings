import { Box, Typography, Card, CardContent, Button, Chip, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * HotelPartners.jsx
 *
 * RESPONSABILIDAD:
 * - Mostrar hoteles más propuestos (prueba de confianza)
 *
 * CAMBIO UX/UI:
 * - Antes: “para ceremonias” muy directo
 * - Ahora: “para viajes, grupos y celebraciones” (más general)
 *
 * OBJETIVO UX:
 * - Reducir ansiedad: “¿trabajan con hoteles buenos?”
 * - Mantener tono premium/editorial (sin sentirse catálogo)
 */

import hardRockImg from "../../assets/images/hotels/hard-rock.jpg";
import moonPalaceImg from "../../assets/images/hotels/moon-palace.webp";
import planetHollywoodImg from "../../assets/images/hotels/planet-hollywood.webp";

export default function HotelPartners() {
    const hotels = [
        {
            name: "Hard Rock",
            image: hardRockImg,
            tags: ["All-inclusive", "Entretenimiento", "Grupos"],
            desc:
                "Ideal si buscas energía, experiencias completas y un ambiente vibrante para viajar con amigos o en grupo.",
        },
        {
            name: "Moon Palace",
            image: moonPalaceImg,
            tags: ["Lujo", "All-inclusive", "Experiencia completa"],
            desc:
                "Servicio reconocido, espacios amplios y excelente experiencia para viajes especiales, familias y celebraciones.",
        },
        {
            name: "Planet Hollywood",
            image: planetHollywoodImg,
            tags: ["Moderno", "All-inclusive", "Experiencias"],
            desc:
                "Concepto moderno y divertido, perfecto para quienes buscan un viaje con estilo y recuerdos inolvidables.",
        },
    ];

    return (
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 26, md: 32 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Hoteles más propuestos
            </Typography>

            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40 }, mb: 1.5 }}>
                Resorts que elevan tu experiencia
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 820, mb: 4 }}>
                Te ayudamos a elegir el hotel ideal según el tipo de viaje: escapada, amigos, familia, grupo o celebración.
                Y si ya tienes uno en mente, también lo cotizamos.
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    alignItems: "stretch",
                }}
            >
                {hotels.map((h, index) => (
                    <Box
                        key={h.name}
                        component={motion.div}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                        sx={{ display: "flex" }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 4,
                                overflow: "hidden",
                                border: "1px solid rgba(42,49,53,0.08)",
                                backgroundColor: "background.paper",
                            }}
                        >
                            <Box
                                sx={{
                                    height: 200,
                                    backgroundImage: `url(${h.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />

                            <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
                                <Typography sx={{ fontWeight: 800, fontSize: 20, mb: 1 }}>
                                    {h.name}
                                </Typography>

                                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mb: 1.5 }}>
                                    {h.tags.map((t) => (
                                        <Chip key={t} label={t} size="small" sx={{ borderRadius: 999 }} />
                                    ))}
                                </Stack>

                                <Typography sx={{ opacity: 0.85, lineHeight: 1.7, mb: 2 }}>
                                    {h.desc}
                                </Typography>

                                <Button component={NavLink} to="/contacto" variant="outlined" sx={{ mt: "auto" }}>
                                    Cotizar este hotel
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
