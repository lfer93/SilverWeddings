import { Box, Typography, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * EventsDestinationBridge.jsx
 *
 * RESPONSABILIDAD:
 * - Conectar la página de “Destinos” (general) con “Eventos Destino” (especializada)
 *
 * UX:
 * - Evita confusión de posicionamiento (agencia general vs especialista en eventos)
 * - Captura leads de eventos sin contaminar el tono general de la página
 */
export default function EventsDestinationBridge() {
    return (
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                sx={{
                    borderRadius: 6,
                    p: { xs: 3, md: 5 },
                    background:
                        "linear-gradient(180deg, rgba(208,214,219,0.55) 0%, rgba(197,237,237,0.55) 100%)", // Diamante + Cielo suaves
                    border: "1px solid rgba(42,49,53,0.08)",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                        fontSize: { xs: 24, md: 30 },
                        color: "text.secondary",
                        mb: 1,
                    }}
                >
                    ¿Planeas una celebración?
                </Typography>

                <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, mb: 1.5 }}>
                    Eventos Destino
                </Typography>

                <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 820, mx: "auto", mb: 3 }}>
                    Si estás pensando en una boda, bautizo, XV’s o cualquier evento especial en destino,
                    tenemos una sección dedicada para ayudarte con logística, hospedaje y experiencia de invitados.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
                    <Button component={NavLink} to="/eventos-destino" variant="contained" size="large">
                        Ver Eventos Destino
                    </Button>
                    <Button component={NavLink} to="/contacto" variant="outlined" size="large">
                        Cuéntanos tu idea
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
