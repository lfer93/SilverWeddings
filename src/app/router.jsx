import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Weddings from "../pages/Weddings";
import Destinations from "../pages/Destinations";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/routing/ScrollToTop";

/**
 * router.jsx
 * - Aquí definimos las rutas del sitio (multipágina).
 * - Todas cuelgan del MainLayout para reutilizar Navbar/Footer.
 */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> }, // "/"
            { path: "bodas", element: <Weddings /> }, // "/bodas"
            { path: "destinos", element: <Destinations /> }, // "/destinos"
            { path: "nosotros", element: <About /> }, // "/nosotros"
            { path: "contacto", element: <Contact /> }, // "/contacto"
        ],
    },
]);
