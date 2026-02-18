import { AnimatePresence, motion } from "framer-motion";

/**
 * PageTransition
 *
 * PROBLEMA UX:
 * - En SPA, el scroll se “queda” donde estaba al cambiar de ruta.
 * - Con AnimatePresence mode="wait", el contenido anterior sigue un momento,
 *   y hacer scrollToTop “antes” puede no reflejarse como esperas.
 *
 * SOLUCIÓN:
 * - Forzamos scroll al top cuando termina la animación de ENTRADA
 *   de la nueva página (momento más estable).
 *
 * NOTA:
 * - onAnimationComplete se dispara cuando termina la animación "animate".
 * - Eso asegura que la nueva página ya entró.
 */
export default function PageTransition({ children, routeKey }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={routeKey}
                initial={{ opacity: 0, y: 10 }}   // entra ligeramente desde abajo
                animate={{ opacity: 1, y: 0 }}    // se asienta en su posición
                exit={{ opacity: 0, y: -10 }}     // sale ligeramente hacia arriba
                transition={{ duration: 0.25, ease: "easeOut" }}
                onAnimationComplete={() => {
                    /**
                     * UX: iniciar arriba al llegar a una nueva ruta
                     * - Lo hacemos al finalizar la animación de entrada para que sea consistente.
                     */
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
