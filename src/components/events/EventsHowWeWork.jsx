import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

/**
 * EventsHowWeWork.jsx
 *
 * RESPONSABILIDAD:
 * - Explicar el proceso de “Eventos Destino” en pasos simples y visuales.
 *
 * DECISIÓN UX/UI:
 * - Usamos CSS Grid porque es más predecible que MUI Grid en layouts complejos
 *   y evita “se apiló todo” por breakpoints o props.
 *
 * OBJETIVO UI:
 * - Cards consistentes (misma altura en desktop)
 * - Sensación más “cuadrada” en desktop
 * - Texto completo (sin recortes)
 *
 * ANIMACIÓN:
 * - Entrada más visible pero elegante: fade + slide
 * - Hover sutil: translate + scale
 */
export default function EventsHowWeWork() {
    const steps = [
        {
            icon: <ForumOutlinedIcon fontSize="medium" />,
            title: "Nos cuentan su celebración",
            text:
                "Definimos tipo de evento, fecha tentativa, invitados y estilo. Aquí entendemos lo esencial para diseñar una experiencia a su medida.",
        },
        {
            icon: <CalendarMonthOutlinedIcon fontSize="medium" />,
            title: "Diseñamos el plan sin estrés",
            text:
                "Proponemos opciones de destino/hotel, logística y tiempos. Ajustamos el plan hasta encontrar el equilibrio perfecto entre experiencia y presupuesto.",
        },
        {
            icon: <LuggageOutlinedIcon fontSize="medium" />,
            title: "Coordinamos a los invitados",
            text:
                "Guiamos el proceso del grupo: comunicación, recomendaciones y orden. Así todos llegan con claridad y ustedes disfrutan con tranquilidad.",
        },
        {
            icon: <CelebrationOutlinedIcon fontSize="medium" />,
            title: "Viven el evento y el viaje",
            text:
                "Acompañamiento en todo momento: durante la planeación y también en el evento. Estamos al pendiente para que cada detalle salga bien y ustedes solo disfruten.",
        },
    ];

    return (
        <Box>
            {/* =========================
        Encabezado
        UX:
        - Beneficio emocional (“sin estrés”)
        - Refuerza claridad (“paso a paso”)
      ========================= */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 24, md: 30 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Sin estrés, con amor
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 28, md: 40 },
                    mb: { xs: 2.5, md: 3.5 },
                }}
            >
                Así lo hacemos paso a paso
            </Typography>

            {/* =========================
        GRID REAL (CSS Grid)
        - xs: 1 columna
        - sm: 2 columnas
        - md: 4 columnas
      ========================= */}
            <Box
                sx={{
                    display: "grid",
                    gap: 20 / 8, // 20px
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(4, 1fr)",
                    },
                }}
            >
                {steps.map((step, index) => (
                    <Box
                        key={step.title}
                        component={motion.div}
                        /**
                         * Animación (Opción 1):
                         * - Más visible pero elegante
                         */
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: index * 0.12,
                        }}
                        sx={{ height: "100%" }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                /**
                                 * Altura consistente:
                                 * - height 100%: todas llenan su celda
                                 * - minHeight: fuerza proporción similar en desktop
                                 *
                                 * ✅ Aumentamos minHeight para que quepa el texto completo.
                                 * Si aún te queda justo, súbelo a 340.
                                 */
                                height: "100%",
                                minHeight: { xs: "auto", md: 320 },

                                borderRadius: 4,
                                backgroundColor: "background.paper",
                                border: "1px solid rgba(42,49,53,0.08)",

                                display: "flex",
                                flexDirection: "column",

                                /**
                                 * Hover premium:
                                 * - Se siente táctil, sin exagerar
                                 */
                                transition: "transform 220ms ease, border-color 220ms ease",
                                "&:hover": {
                                    transform: "translateY(-4px) scale(1.02)",
                                    borderColor: "rgba(42,49,53,0.16)",
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    p: 2.5,
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Badge del icono (acento Mar suave) */}
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
                                        flexShrink: 0,
                                    }}
                                >
                                    {step.icon}
                                </Box>

                                {/* Título */}
                                <Typography
                                    sx={{
                                        fontFamily: "TT Commons Pro, sans-serif",
                                        fontWeight: 700,
                                        fontSize: 18,
                                        mb: 1,
                                        color: "text.primary",
                                        flexShrink: 0,
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                {/* Texto (✅ completo, sin recorte) */}
                                <Typography
                                    sx={{
                                        opacity: 0.85,
                                        lineHeight: 1.7,
                                    }}
                                >
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
