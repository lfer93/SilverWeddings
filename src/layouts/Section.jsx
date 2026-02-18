import { Box, Container } from "@mui/material";

/**
 * Section.jsx
 *
 * RESPONSABILIDAD:
 * - Dar consistencia visual a TODAS las secciones:
 *   - Ancho máximo (para look premium)
 *   - Padding vertical consistente
 *
 * UX/UI:
 * - Sin esto, cada bloque “respira” distinto y el sitio se siente menos pulido.
 * - Container centra el contenido y evita líneas de texto demasiado largas.
 *
 * USO:
 * <Section>
 *   <Contenido />
 * </Section>
 *
 * Opcional:
 * - size: controla el maxWidth (md / lg)
 * - sx: estilos extra
 */
export default function Section({ children, size = "lg", sx }) {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 5, md: 7 }, // espaciado vertical consistente (aire premium)
                ...sx,
            }}
        >
            <Container maxWidth={size}>{children}</Container>
        </Box>
    );
}
