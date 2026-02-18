import { Box, Typography, Card, CardContent } from "@mui/material";

/**
 * OurEssence.jsx
 *
 * UX:
 * - La misión es lo que “humaniza” y da confianza.
 * - Copy corto + legible.
 *
 * UI:
 * - Card premium con fondo suave (Diamante / Novia)
 */
export default function OurEssence() {
    return (
        <Box>
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 24, md: 30 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Nuestra esencia
            </Typography>

            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, mb: 1.5 }}>
                Viajar también es un acto de amor
            </Typography>

            <Card
                elevation={0}
                sx={{
                    borderRadius: 4,
                    border: "1px solid rgba(42,49,53,0.08)",
                    background:
                        "linear-gradient(180deg, rgba(208,214,219,0.55) 0%, rgba(255,253,219,0.85) 100%)",
                }}
            >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography sx={{ opacity: 0.9, lineHeight: 1.8, fontSize: { xs: 16, md: 17 } }}>
                        “Silver Weddings” es mucho más que una agencia: es el cómplice que transforma el sueño de casarse junto al mar
                        en una experiencia perfecta y sin estrés. Desde la planeación hasta la llegada al altar, cada detalle está
                        pensado para que cada pareja cree memorias que permanezcan. Aquí, viajar se convierte en un acto de amor, y
                        como la primera gran aventura de su nueva vida.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
