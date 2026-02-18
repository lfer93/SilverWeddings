import { Outlet, useLocation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { useRef } from "react";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import ScrollToTop from "../components/routing/ScrollToTop";

/**
 * MainLayout
 * - Layout global (Navbar + Footer + Outlet)
 * - PageTransition anima cambios de ruta
 * - ScrollToTop fuerza que al cambiar página se vea desde arriba
 *
 * IMPORTANTE:
 * - Le pasamos un ref al contenedor que podría estar scrolleando
 *   (cuando el scroll no está en window).
 */
export default function MainLayout() {
    const location = useLocation();

    // Ref del contenedor principal (por si el scroll vive aquí)
    const mainRef = useRef(null);

    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            {/* Fuerza scroll arriba en cada cambio de ruta */}
            <ScrollToTop scrollContainerRef={mainRef} />

            <Navbar />

            {/* Contenido principal */}
            <Box
                component="main"
                flex={1}
                ref={mainRef}
            /**
             * NOTA:
             * - Si en tu proyecto el scroll está en window, esto no estorba.
             * - Si el scroll está aquí (overflow auto en algún estilo), ahora sí lo controlamos.
             */
            >
                <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
                    <PageTransition routeKey={location.key}>
                        <Outlet />
                    </PageTransition>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
