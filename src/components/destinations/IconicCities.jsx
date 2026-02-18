import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * IconicCities.jsx
 *
 * RESPONSABILIDAD:
 * - Mostrar ciudades icónicas (viajes urbanos)
 *
 * CAMBIO UX/UI:
 * - Antes: “celebrar diferente” ligado a evento
 * - Ahora: viajes urbanos, amigos, escapadas, experiencias icónicas
 *
 * OBJETIVO UX:
 * - Dar variedad (no todo es playa)
 * - Mantener jerarquía secundaria (visual más compacto)
 */

import vegasImg from "../../assets/images/cities/las-vegas.jpg";
import nycImg from "../../assets/images/cities/new-york.jpg";
import chicagoImg from "../../assets/images/cities/chicago.jpeg";

export default function IconicCities() {
    const cities = [
        {
            name: "Las Vegas",
            image: vegasImg,
            desc:
                "Un viaje lleno de energía: shows, experiencias icónicas y planes perfectos para amigos o escapadas rápidas.",
        },
        {
            name: "Nueva York",
            image: nycImg,
            desc:
                "Romance urbano, spots inolvidables y una ciudad que siempre se siente como película.",
        },
        {
            name: "Chicago",
            image: chicagoImg,
            desc:
                "Elegancia moderna, arquitectura impresionante y experiencias ideales para un viaje sofisticado.",
        },
    ];

    return (
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 24, md: 30 }, // jerarquía secundaria
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Ciudades icónicas
            </Typography>

            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 38 }, mb: 1.5 }}>
                Experiencias urbanas inolvidables
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 820, mb: 4 }}>
                Si prefieres un viaje urbano, también armamos itinerarios y experiencias en ciudades emblemáticas.
                Cuéntanos tu plan y lo diseñamos contigo.
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                }}
            >
                {cities.map((c, index) => (
                    <Box
                        key={c.name}
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
                                    height: 180, // menor que playa/hoteles (jerarquía)
                                    backgroundImage: `url(${c.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />

                            <CardContent sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                                <Typography sx={{ fontWeight: 800, fontSize: 18, mb: 1 }}>
                                    {c.name}
                                </Typography>

                                <Typography sx={{ opacity: 0.85, lineHeight: 1.7, mb: 2 }}>
                                    {c.desc}
                                </Typography>

                                <Button component={NavLink} to="/contacto" variant="outlined" sx={{ mt: "auto" }}>
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
