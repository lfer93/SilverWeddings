import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../layouts/MainLayout";

/**
 * router.jsx
 *
 * OBJETIVO:
 * - Definir rutas (SPA multipágina).
 * - Mejorar performance: cargamos cada página "on-demand" (code splitting).
 *
 * UX:
 * - Suspense fallback: muestra un estado de carga breve mientras llega el chunk.
 *   (Luego si quieres, lo cambiamos por un loader más bonito con MUI.)
 */

// ✅ Lazy-load de páginas (cada una será un chunk separado)
const Home = lazy(() => import("../pages/Home"));
const Weddings = lazy(() => import("../pages/Weddings"));
const Destinations = lazy(() => import("../pages/Destinations"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

/**
 * Fallback simple:
 * - Intencionalmente minimal para no meter más dependencias.
 * - Si quieres, lo hacemos con MUI (Box + Typography + Skeleton).
 */
function PageLoader() {
    return <div style={{ padding: 24 }}>Cargando…</div>;
}

const withSuspense = (Page) => (
    <Suspense fallback={<PageLoader />}>
        <Page />
    </Suspense>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: withSuspense(Home) }, // "/"
            { path: "bodas", element: withSuspense(Weddings) }, // "/bodas"
            { path: "destinos", element: withSuspense(Destinations) }, // "/destinos"
            { path: "nosotros", element: withSuspense(About) }, // "/nosotros"
            { path: "contacto", element: withSuspense(Contact) }, // "/contacto"
        ],
    },
]);
