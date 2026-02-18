import { Box } from "@mui/material";
import DestinationsHero from "../components/destinations/DestinationsHero";
import FeaturedDestinations from "../components/destinations/FeaturedDestinations";
import HotelPartners from "../components/destinations/HotelPartners";
import IconicCities from "../components/destinations/IconicCities";
import EventsDestinationBridge from "../components/destinations/EventsDestinationBridge";
import AnyDestinationCTA from "../components/destinations/AnyDestinationCTA";
import usePageMeta from "../hooks/usePageMeta";

/**
 * Destinations.jsx
 *
 * UX:
 * - Página GENERAL (viajes)
 * - Mostramos playas top + hoteles + ciudades
 * - Agregamos puente a “Eventos Destino” para quien busca celebraciones
 */
export default function Destinations() {
        usePageMeta({
            title: "Destinos de Viaje en México y el Mundo | Silver",
            description:
                "Descubre destinos ideales para parejas, familias y grupos. Planeamos tu experiencia con claridad y acompañamiento.",
        });
        return (
            <Box>
                <DestinationsHero />
                <FeaturedDestinations />
                <HotelPartners />
                <IconicCities />
                <EventsDestinationBridge />
                <AnyDestinationCTA />
            </Box>
        );
    }
