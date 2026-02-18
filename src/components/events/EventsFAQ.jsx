import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

/**
 * EventsFAQ.jsx
 *
 * RESPONSABILIDAD:
 * - Resolver objeciones comunes antes de que el usuario contacte.
 *
 * OBJETIVO UX:
 * - Reducir incertidumbre (costos, tiempos, logística, invitados)
 * - Aumentar confianza (acompañamiento, proceso claro)
 * - Evitar fricción (respuestas directas y breves)
 *
 * OBJETIVO UI:
 * - Acordeón limpio y premium (sin sombras pesadas)
 * - Jerarquía clara: pregunta -> respuesta
 * - Animación sutil al aparecer (coherente con el resto del sitio)
 */
export default function EventsFAQ() {
    /**
     * Data-driven:
     * - Fácil de editar sin tocar el layout
     * - Puedes agregar/quitar preguntas en 1 lugar
     */
    const faqs = [
        {
            q: "¿Solo hacen bodas o también otros eventos?",
            a: "Hacemos eventos destino como bodas, XV’s, bautizos, aniversarios y celebraciones especiales. Adaptamos la planeación al tipo de evento, al destino y al perfil del grupo.",
        },
        {
            q: "¿Pueden cotizar cualquier destino?",
            a: "Sí. Aunque tenemos destinos muy cotizados como Cancún/Riviera Maya, Los Cabos y Puerto Vallarta, podemos cotizar cualquier destino en México o en el extranjero, según lo que estén buscando.",
        },
        {
            q: "¿Ustedes coordinan a los invitados?",
            a: "Sí. Ayudamos con la organización del grupo: recomendaciones, tiempos, confirmaciones y logística general. La idea es que ustedes no carguen con todo y que el grupo llegue con claridad.",
        },
        {
            q: "¿Con cuánto tiempo de anticipación recomiendan planear?",
            a: "Lo ideal es iniciar con varios meses de anticipación, especialmente si habrá grupo o temporada alta. Aun así, si tu fecha está cerca, revisamos opciones reales y te decimos honestamente lo viable.",
        },
        {
            q: "¿Trabajan con hoteles específicos?",
            a: "Tenemos hoteles y resorts frecuentemente propuestos (por ejemplo Hard Rock, Moon Palace y Planet Hollywood), pero la selección final depende del destino, el presupuesto, la disponibilidad y el estilo del evento.",
        },
        {
            q: "¿Cuánto cuesta organizar un evento destino?",
            a: "Depende del destino, temporada, número de invitados, hotel y tipo de experiencia. Lo que hacemos es ayudarte a elegir la mejor opción dentro de tu presupuesto y aterrizar un plan claro desde el inicio.",
        },
        {
            q: "¿Qué información necesitan para comenzar?",
            a: "Con lo básico es suficiente: tipo de evento, fecha tentativa, ciudad de salida (ej. Saltillo/Monterrey), número aproximado de invitados, destino (si ya lo tienen) y el estilo de experiencia que buscan.",
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
                Dudas comunes
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 28, md: 40 },
                    mb: 1.5,
                }}
            >
                Preguntas frecuentes
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 860, mb: 3 }}>
                Queremos que sientan claridad desde el inicio. Si no ves tu pregunta aquí, escríbenos y lo resolvemos contigo.
            </Typography>

            {/* Contenedor con animación sutil */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                sx={{
                    display: "grid",
                    gap: 12 / 8, // 12px
                }}
            >
                {faqs.map((item) => (
                    <Accordion
                        key={item.q}
                        disableGutters
                        elevation={0}
                        sx={{
                            borderRadius: 3,
                            border: "1px solid rgba(42,49,53,0.08)",
                            backgroundColor: "background.paper",
                            "&:before": { display: "none" }, // quita línea default de MUI
                            overflow: "hidden",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                px: 2.5,
                                py: 1.5,
                                "& .MuiAccordionSummary-content": { my: 0 },
                            }}
                        >
                            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
                                {item.q}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2 }}>
                            <Typography sx={{ opacity: 0.85, lineHeight: 1.7 }}>
                                {item.a}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
}
