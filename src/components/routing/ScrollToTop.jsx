import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 *
 * - Resetea el scroll al cambiar de ruta.
 * - Soporta scroll en window o en un contenedor con overflow.
 * - useLayoutEffect evita parpadeos visuales.
 */
export default function ScrollToTop({ scrollContainerRef }) {
    const location = useLocation();

    useLayoutEffect(() => {
        // 1) Reset scroll global
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // 2) Reset scroll del contenedor (si existe)
        if (scrollContainerRef?.current) {
            scrollContainerRef.current.scrollTo({ top: 0, left: 0, behavior: "auto" });
            scrollContainerRef.current.scrollTop = 0;
        }

        // 3) Refuerzo en el siguiente frame (por animaciones)
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            if (scrollContainerRef?.current) {
                scrollContainerRef.current.scrollTop = 0;
            }
        });
    }, [location.pathname, scrollContainerRef]); // ✅ dependencia incluida

    return null;
}
