import { Box } from "@mui/material";
import Hero from "../components/Hero";
import DestinationsHighlights  from "../components/DestinationHighlights";
import TrustSection from "../components/TrustSection";
import HowWeWork from "../components/HowWeWork";
import FinalCTA from "../components/FinalCTA";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
    usePageMeta({
        title: "Silver Weddings & Travel | Viajes y Eventos Destino",
        description:
            "Planeamos viajes y eventos destino sin estrés. Acompañanmiento completo para bodas, celebraciones, aniversarios, viajes, y experiencias inolvidables"
    });
    return (
        <Box>
            <Hero />
            <HowWeWork />
            <DestinationsHighlights />
            <TrustSection />
            <FinalCTA />
        </Box>
    );
}
