import { Box, Card, CardContent, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";
import usePageMeta from "../hooks/usePageMeta";

/**
 * Contact.jsx
 *
 * OBJETIVO:
 * - Página de contacto con look premium
 * - Contenedor tipo “paper/card” para enfocar la atención
 */
export default function Contact() {
    usePageMeta({
        title: "Contacto | Planea tu Viaje o Evento con Silver",
        description:
            "Contáctanos para comenzar la planeación de tu viaje o evento destino. Te acompañamos paso a paso, sin estrés.",
    });
    return (
        <Box sx={{ mt: { xs: 2, md: 3 } }}>
            <Card
                elevation={0}
                sx={{
                    borderRadius: 4,
                    backgroundColor: "background.paper",
                    border: "1px solid rgba(42,49,53,0.08)",
                    overflow: "hidden",
                }}
            >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <ContactForm />

                    {/* Micro-copy extra (opcional) */}
                    <Typography sx={{ mt: 4, opacity: 0.75, lineHeight: 1.7 }}>
                        Si ya tienen destino o fecha, perfecto. Si todavía no, no pasa nada:
                        los ayudamos a elegir la mejor opción según su estilo y presupuesto.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
