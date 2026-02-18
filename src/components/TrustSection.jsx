import { Box, Typography, Card, CardContent } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MapIcon from "@mui/icons-material/Map";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { motion } from "framer-motion";

/**
 * TrustSection.jsx
 *
 * OBJETIVO UX:
 * - Aumentar confianza antes de pedir contacto/cotización
 * - Reducir fricción: “esto está bajo control”
 * - Reforzar la promesa del brand: cómplice + sin estrés + experiencia cuidada
 *
 * ESTRUCTURA:
 * 1) Trust Bar: pruebas rápidas (icono + claim)
 * 2) Mini testimonios: validación emocional (lo que más convierte en bodas)
 */
export default function TrustSection() {
    /**
     * Trust bar items (pruebas rápidas)
     * - Mantenlos cortos y creíbles
     * - Evitamos números inventados (ej. “+200 bodas”) si no están confirmados
     */
    const trustItems = [
        {
            icon: <VerifiedIcon fontSize="medium" />,
            title: "Planeación clara",
            text: "Pasos simples y acompañamiento en cada decisión.",
        },
        {
            icon: <SupportAgentIcon fontSize="medium" />,
            title: "Atención personalizada",
            text: "Te guiamos de inicio a fin, sin estrés.",
        },
        {
            icon: <MapIcon fontSize="medium" />,
            title: "Destinos en México",
            text: "Los Cabos, Riviera Maya, Cancún y más.",
        },
        {
            icon: <AutoAwesomeIcon fontSize="medium" />,
            title: "Experiencia memorable",
            text: "Detalles cuidados para recuerdos que permanezcan.",
        },
    ];

    /**
     * Testimonios (placeholders)
     * - Luego los reemplazamos por testimonios reales
     * - Mantener 1–2 líneas, directos y emocionales
     */
    const testimonials = [
        {
            quote:
                "Nos sentimos acompañados en todo momento. La planeación fue súper clara y sin estrés.",
            name: "Pareja, Saltillo",
        },
        {
            quote:
                "Todo estuvo cuidado al detalle. Solo disfrutamos el viaje y el día fue perfecto.",
            name: "Pareja, Monterrey",
        },
        {
            quote:
                "Nos ayudaron a elegir destino, hotel y logística. Fue nuestra primera gran aventura juntos.",
            name: "Pareja, México",
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
                Confianza que se siente.
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 30, md: 40 },
                    mb: { xs: 2.5, md: 3.5 },
                }}
            >
                Están en buenas manos
            </Typography>

            {/* =========================================================
          TRUST BAR (4 items)
          - CSS Grid estable (como lo que ya usamos)
          - misma altura con flex
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
                    mb: { xs: 3, md: 4 },
                }}
            >
                {trustItems.map((item, index) => (
                    <Box
                        key={item.title}
                        component={motion.div}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
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
                                backgroundColor: "background.paper",
                                border: "1px solid rgba(42,49,53,0.08)",
                            }}
                        >
                            <CardContent sx={{ p: 2.5, flex: 1 }}>
                                {/* Icon badge */}
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
                                    {item.icon}
                                </Box>

                                <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 0.5 }}>
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

            {/* =========================================================
          TESTIMONIOS (2–3)
          - Los hacemos “editorial”: quotes cortos con borde suave
          - 3 columnas en desktop, 1 en mobile
         ========================================================= */}
            <Box
                sx={{
                    display: "grid",
                    gap: 20 / 8,
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(3, 1fr)",
                    },
                    alignItems: "stretch",
                }}
            >
                {testimonials.map((t, index) => (
                    <Box
                        key={t.name}
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
                                borderRadius: 4,
                                backgroundColor: "rgba(255,253,219,0.7)", // Novia suave
                                border: "1px solid rgba(42,49,53,0.08)",
                            }}
                        >
                            <CardContent sx={{ p: 2.5, flex: 1 }}>
                                {/* Quote */}
                                <Typography
                                    sx={{
                                        fontFamily: "TT Commons Pro, sans-serif",
                                        fontSize: 16,
                                        lineHeight: 1.75,
                                        mb: 2,
                                    }}
                                >
                                    “{t.quote}”
                                </Typography>

                                {/* Autor (discreto y elegante) */}
                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "text.secondary",
                                    }}
                                >
                                    {t.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
