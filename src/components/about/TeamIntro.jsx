import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";

/**
 * TeamIntro.jsx
 *
 * UX:
 * - Poner nombres reales aumenta confianza (marca “humana” y cercana).
 * - Aclara “quiénes somos” sin hacerse largo o corporativo.
 *
 * UI:
 * - Card editorial premium (bordes suaves + fondo sutil con colores de marca).
 * - Chips para nombres: escaneable y elegante (sin fotos aún).
 */
export default function TeamIntro() {
    // ✅ Nombres (puedes cambiarlos después por los reales)
    const founders = ["José", "Óscar"];
    const team = ["Claudia", "Diana", "Alexis"];

    return (
        <Box>
            {/* Encabezado con toque romántico/editorial */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 24, md: 30 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Detrás de Silver
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 28, md: 40 },
                    mb: 1.5,
                }}
            >
                Un equipo que acompaña de verdad
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 900, mb: 3 }}>
                Silver nace de la visión de <strong>José</strong> y <strong>Óscar</strong>, quienes crearon la agencia con una idea clara:
                acompañar a las personas a vivir viajes y celebraciones en destino sin estrés, con claridad y atención real a cada detalle.
            </Typography>

            {/* Card premium con fondo suave (Diamante + Novia) */}
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
                    {/* Fundadores */}
                    <Typography sx={{ fontWeight: 800, mb: 1 }}>
                        Fundadores
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mb: 2.5 }}>
                        {founders.map((name) => (
                            <Chip
                                key={name}
                                label={name}
                                size="small"
                                sx={{
                                    borderRadius: 999,
                                    backgroundColor: "rgba(60,127,144,0.12)", // Mar suave
                                }}
                            />
                        ))}
                    </Stack>

                    {/* Equipo */}
                    <Typography sx={{ fontWeight: 800, mb: 1 }}>
                        Equipo
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mb: 2.5 }}>
                        {team.map((name) => (
                            <Chip
                                key={name}
                                label={name}
                                size="small"
                                sx={{
                                    borderRadius: 999,
                                    backgroundColor: "rgba(197,237,237,0.5)", // Cielo suave
                                }}
                            />
                        ))}
                    </Stack>

                    {/* Copy final (Opción A) */}
                    <Typography sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                        Hoy, junto con <strong>Claudia</strong>, <strong>Diana</strong> y <strong>Alexis</strong>, formamos un equipo que cree que cada evento y cada viaje merece planeación,
                        sensibilidad y un trato humano. <br />
                        No vendemos paquetes: diseñamos experiencias pensadas para cada historia, cada grupo y cada momento importante. <br />
                        Para nosotros, viajar —y celebrar— no es solo llegar a un destino, sino vivir el proceso con tranquilidad y confianza.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
