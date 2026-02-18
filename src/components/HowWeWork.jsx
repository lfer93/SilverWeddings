import { Box, Typography, Card, CardContent } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LuggageIcon from "@mui/icons-material/Luggage";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { motion } from "framer-motion";

/**
 * HowWeWork.jsx (v2 con CSS Grid)
 *
 * POR QUÉ CAMBIAMOS DE MUI Grid A CSS Grid:
 * - CSS Grid es más predecible cuando quieres “4 columnas sí o sí”
 * - Evita comportamientos raros cuando el contenedor tiene estilos especiales
 * - Mantiene igual de fácil el responsive
 */
export default function HowWeWork() {
    const steps = [
        {
            icon: <FavoriteBorderIcon fontSize="medium" />,
            title: "Soñamos contigo",
            text: "Entendemos su historia, estilo y presupuesto para aterrizar la boda ideal junto al mar.",
        },
        {
            icon: <ChecklistIcon fontSize="medium" />,
            title: "Planeamos sin estrés",
            text: "Diseñamos un plan claro: fechas, hospedaje, traslados y detalles, para que todo fluya.",
        },
        {
            icon: <LuggageIcon fontSize="medium" />,
            title: "Coordinamos el viaje",
            text: "Reservas, logística y recomendaciones. Ustedes solo se enfocan en disfrutar la aventura.",
        },
        {
            icon: <CelebrationIcon fontSize="medium" />,
            title: "Llegan al altar",
            text: "Acompañamiento final para que vivan una experiencia perfecta y creen memorias que permanezcan.",
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
                Sin estrés, con amor.
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 30, md: 40 },
                    mb: { xs: 2.5, md: 3.5 },
                }}
            >
                Así te acompañamos en cada paso
            </Typography>

            {/* =========================================================
          CONTENEDOR CSS GRID
          - xs: 1 columna
          - sm: 2 columnas
          - md+: 4 columnas
          - alignItems: stretch asegura misma altura en las cards
         ========================================================= */}
            <Box
                sx={{
                    display: "grid",
                    gap: 20 / 8, // 2.5 * 8 = 20px aprox (similar a spacing={2.5})
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(4, 1fr)",
                    },
                    alignItems: "stretch",
                }}
            >
                {steps.map((step, index) => (
                    <Box
                        key={step.title}
                        component={motion.div}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.35,
                            ease: "easeOut",
                            delay: index * 0.06,
                        }}
                        sx={{
                            display: "flex", // ✅ permite que la card estire a misma altura
                        }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                width: "100%",
                                height: "100%", // ✅ misma altura
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 4,
                                backgroundColor: "background.paper",
                                border: "1px solid rgba(42,49,53,0.08)",
                            }}
                        >
                            <CardContent
                                sx={{
                                    p: 2.5,
                                    flex: 1, // ✅ iguala altura aunque cambie el texto
                                }}
                            >
                                {/* Icono en badge */}
                                <Box
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 999,
                                        display: "grid",
                                        placeItems: "center",
                                        mb: 1.5,
                                        backgroundColor: "rgba(60,127,144,0.12)",
                                        color: "primary.main",
                                    }}
                                >
                                    {step.icon}
                                </Box>

                                <Typography
                                    sx={{
                                        fontFamily: "TT Commons Pro, sans-serif",
                                        fontWeight: 600,
                                        fontSize: 18,
                                        mb: 1,
                                        color: "text.primary",
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                <Typography sx={{ color: "text.primary", opacity: 0.85, lineHeight: 1.7 }}>
                                    {step.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
