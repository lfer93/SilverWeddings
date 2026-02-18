import { Box } from "@mui/material";
import Section from "../layouts/Section";
import AboutHero from "../components/about/AboutHero";
import OurEssence from "../components/about/OurEssence";
import TeamIntro from "../components/about/TeamIntro";
import WhySilver from "../components/about/WhySilver";
import AboutFinalCTA from "../components/about/AboutFinalCTA";
import usePageMeta from "../hooks/usePageMeta";

/**
 * About.jsx (Nosotros)
 *
 * Estructura por secciones:
 * - Hero (full width)
 * - Nuestra esencia (misión)
 * Luego agregamos:
 * - WhySilver (valores)
 * - MiniProceso
 * - CTA final
 */
export default function About() {
    usePageMeta({
        title: "Quiénes Somos | Silver Weddings & Travel",
        description:
            "Conoce a Silver: una agencia que acompaña viajes y eventos destino con atención real, planeación clara y sin estrés.",
    });
    return (
        <Box>
            <AboutHero />

            <Section>
                <OurEssence />
            </Section>
            <Section>
                <TeamIntro />
            </Section>
            <Section>
                <WhySilver />
            </Section>
            <Section>
                <AboutFinalCTA />
            </Section>
        </Box>
    );
}
