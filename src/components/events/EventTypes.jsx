import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * EventTypes.jsx
 *
 * RESPONSABILIDAD:
 * - Mostrar los tipos de eventos que se pueden organizar en destino.
 *
 * OBJETIVO UX:
 * - “Auto-identificación” rápida:
 *   el usuario ve su evento y siente: “sí aplica para mí”.
 * - Reducir dudas antes de contactar (menos fricción).
 *
 * OBJETIVO UI:
 * - Cards premium (bordes suaves, aire, jerarquía clara).
 * - Imagen/visual limpio + texto conciso.
 * - CTA suave hacia contacto.
 *
 * NOTA:
 * - Por ahora usamos imágenes locales (recomendado).
 * - Si todavía no tienes imágenes, puedes usar 1 placeholder temporal.
 */

// ✅ Recomendado: agrega imágenes locales en:
// src/assets/images/events/types/
import weddingImg from "../../assets/images/events/types/boda.jpg";
import xvImg from "../../assets/images/events/types/xv.jpg";
import baptismImg from "../../assets/images/events/types/bautizo.jpg";
import anniversaryImg from "../../assets/images/events/types/aniversario.jpg";

export default function EventTypes() {
    /**
     * Data model (simple y escalable):
     * - title: qué es
     * - subtitle: cómo se siente (emocional)
     * - desc: qué resolvemos (práctico)
     * - cta: acción
     *
     * UX tip:
     * - Mezclar emoción + claridad = más conversión.
     */
    const eventTypes = [
        {
            title: "Bodas destino",
            subtitle: "El inicio de su gran historia",
            desc:
                "Planeamos la experiencia completa: destino, hospedaje, logística de invitados y acompañamiento para que disfruten sin estrés.",
            image: weddingImg,
            cta: "Cotizar boda destino",
        },
        {
            title: "XV’s destino",
            subtitle: "Una celebración que se recuerda",
            desc:
                "Creamos una experiencia increíble para la festejada y su familia, cuidando traslados, hospedaje y momentos especiales.",
            image: xvImg,
            cta: "Cotizar XV’s destino",
        },
        {
            title: "Bautizos destino",
            subtitle: "Un momento íntimo y significativo",
            desc:
                "Armamos un viaje familiar con todo coordinado para que solo se enfoquen en disfrutar y compartir en tranquilidad.",
            image: baptismImg,
            cta: "Cotizar bautizo destino",
        },
        {
            title: "Aniversarios y celebraciones",
            subtitle: "Porque el amor también se festeja",
            desc:
                "Escapadas románticas o viajes en grupo para celebrar: aniversarios, propuestas, cumpleaños o cualquier ocasión especial.",
            image: anniversaryImg,
            cta: "Cotizar celebración",
        },
    ];

    return (
        <Box sx={{ mt: { xs: 2, md: 2 } }}>
            {/* Encabezado editorial */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 24, md: 30 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                El tipo de celebración
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 28, md: 40 },
                    mb: 1.5,
                }}
            >
                Elige el evento que están planeando
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 860, mb: 4 }}>
                Cada evento tiene su esencia. Nosotros te ayudamos a aterrizarlo en el destino ideal y a coordinar la
                experiencia para ustedes y sus invitados.
            </Typography>

            {/* Grid (2 columnas en tablet/desktop, 1 en móvil) */}
            <Box
                sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                    alignItems: "stretch",
                }}
            >
                {eventTypes.map((e, index) => (
                    <Box
                        key={e.title}
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
                        sx={{ display: "flex" }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" }, // responsive “editorial”
                                borderRadius: 4,
                                overflow: "hidden",
                                border: "1px solid rgba(42,49,53,0.08)", // Tuxedo suave
                                backgroundColor: "background.paper",
                            }}
                        >
                            {/* Imagen lateral (o superior en móvil) */}
                            <Box
                                sx={{
                                    width: { xs: "100%", sm: 220 },
                                    minHeight: { xs: 180, sm: "100%" },
                                    backgroundImage: `url(${e.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    flexShrink: 0,
                                }}
                            />

                            {/* Contenido */}
                            <CardContent sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                                <Typography sx={{ fontWeight: 800, fontSize: 20, mb: 0.5 }}>
                                    {e.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                                        color: "text.secondary",
                                        fontSize: 20,
                                        mb: 1.5,
                                    }}
                                >
                                    {e.subtitle}
                                </Typography>

                                <Typography sx={{ opacity: 0.85, lineHeight: 1.7, mb: 2 }}>
                                    {e.desc}
                                </Typography>

                                {/* CTA suave hacia contacto */}
                                <Button
                                    component={NavLink}
                                    to="/contacto"
                                    variant="outlined"
                                    sx={{ mt: "auto", alignSelf: "flex-start" }}
                                >
                                    {e.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
