import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

// Iconos (elegidos por significado, no por “decoración”)
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

/**
 * WhySilver.jsx
 *
 * UX:
 * - Convierte promesas en razones concretas (construye confianza).
 * - Responde objeciones típicas:
 *   “¿por qué con ustedes?”, “¿me van a acompañar?”, “¿coordinarán al grupo?”
 *
 * UI:
 * - Cards premium en grid (1 / 2 / 3 columnas según pantalla).
 * - Iconos como “anclas visuales” para escaneo rápido.
 * - Animación suave (coherente con el resto del sitio).
 */
export default function WhySilver() {
    /**
     * Data model:
     * - title: beneficio principal (corto y claro)
     * - text: explicación (máx 2-3 líneas)
     *
     * Tip UX:
     * - Titulares en “beneficio”, no en “feature”.
     */
    const reasons = [
        {
            icon: <VerifiedOutlinedIcon fontSize="medium" />,
            title: "Planeación con claridad",
            text:
                "Aterrizamos opciones, tiempos y prioridades desde el inicio para que tomen decisiones con calma y seguridad.",
        },
        {
            icon: <ChatOutlinedIcon fontSize="medium" />,
            title: "Acompañamiento real",
            text:
                "Estamos presentes durante la planeación y al momento del evento, cuidando detalles para que todo salga bien.",
        },
        {
            icon: <AirplaneTicketOutlinedIcon fontSize="medium" />,
            title: "Experiencias a su medida",
            text:
                "No vendemos paquetes genéricos. Diseñamos un plan según su historia, estilo y presupuesto.",
        },
        {
            icon: <GroupsOutlinedIcon fontSize="medium" />,
            title: "Coordinación de invitados",
            text:
                "Apoyamos con la logística del grupo: comunicación, recomendaciones y orden para que todos lleguen con claridad.",
        },
        {
            icon: <FavoriteBorderOutlinedIcon fontSize="medium" />,
            title: "Sin estrés, con amor",
            text:
                "Nuestro enfoque es que disfruten el proceso. Ustedes viven el momento; nosotros nos ocupamos de lo demás.",
        },
    ];

    return (
        <Box>
            {/* Encabezado editorial */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 24, md: 30 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Por qué Silver
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 28, md: 40 },
                    mb: 1.5,
                }}
            >
                Lo que hace la diferencia
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 900, mb: 4 }}>
                No se trata solo de reservar. Se trata de acompañarlos y cuidar cada detalle para que su viaje o celebración
                se viva con tranquilidad, claridad y emoción.
            </Typography>

            {/* Grid (CSS Grid para control total) */}
            <Box
                sx={{
                    display: "grid",
                    gap: 20 / 8, // 20px
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                }}
            >
                {reasons.map((item, index) => (
                    <Box
                        key={item.title}
                        component={motion.div}
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        sx={{ height: "100%" }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                height: "100%",
                                borderRadius: 4,
                                backgroundColor: "background.paper",
                                border: "1px solid rgba(42,49,53,0.08)",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 220ms ease, border-color 220ms ease",
                                "&:hover": {
                                    transform: "translateY(-4px) scale(1.01)",
                                    borderColor: "rgba(42,49,53,0.16)",
                                },
                            }}
                        >
                            <CardContent sx={{ p: 2.75 }}>
                                {/* Icon badge */}
                                <Box
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 999,
                                        display: "grid",
                                        placeItems: "center",
                                        mb: 1.5,
                                        backgroundColor: "rgba(60,127,144,0.12)", // Mar suave
                                        color: "primary.main",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography sx={{ fontWeight: 800, fontSize: 18, mb: 1 }}>
                                    {item.title}
                                </Typography>

                                <Typography sx={{ opacity: 0.85, lineHeight: 1.7 }}>
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
