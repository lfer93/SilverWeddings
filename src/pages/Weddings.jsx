import { Box } from "@mui/material";
import EventsDestinationHero from "../components/events/EventsDestinationHero";
import EventTypes from "../components/events/EventTypes";
import EventsHowWeWork from "../components/events/EventsHowWeWork";
import Section from "../layouts/Section";
import EventsFAQ from "../components/events/EventsFAQ";
import EventsFinalCTA from "../components/events/EventsFinalCTA";
import usePageMeta from "../hooks/usePageMeta";

/**
 * Weddings.jsx (antes EventsDestination)
 *
 * CONTEXTO:
 * - Esta página empezó pensada para “Bodas Destino”.
 * - Ahora la evolucionamos correctamente a “Eventos Destino”
 *   (bodas, XV’s, bautizos, aniversarios, etc.).
 *
 * OBJETIVO UX:
 * - Aclarar rápidamente “sí hacemos tu tipo de evento”
 * - Explicar el proceso para reducir estrés
 * - Llevar al usuario a contactar (más conversiones)
 *
 * NOTA DE ARQUITECTURA:
 * - La página solo “orquesta” secciones.
 * - La UI y lógica viven en componentes (EventTypes, EventsHowWeWork, etc.).
 */
export default function EventsDestination() {
    usePageMeta({
        title: "Eventos Destino | Silver Weddings & Travel",
        description:
            "Planeamos eventos destino sin estrés. Acompañamiento completo para bodas, XV’s, bautizos, aniversarios, viajes y experiencias inolvidables."
    });
    return (
        <Box>
            {/* =========================================================
        HERO (full width)
        - Define el tono: eventos destino, premium, emocional
      ========================================================= */}
            <EventsDestinationHero />

            {/* =========================================================
        TIPOS DE EVENTO
        UX:
        - Auto-identificación: “sí aplica para mí”
        UI:
        - Section alinea el contenido y da aire premium
      ========================================================= */}
            <Section>
                <EventTypes />
            </Section>

            {/* =========================================================
        PROCESO (How we work)
        UX:
        - Reduce ansiedad (“¿cómo funciona?”)
        - Refuerza “sin estrés” + coordinación de invitados
      ========================================================= */}
            <Section>
                <EventsHowWeWork />
            </Section>

            {/* =========================================================
        SIGUIENTE (después)
        - FAQ de Eventos Destino (reduce objeciones)
        - CTA final a Contacto (cierre de conversión)
      ========================================================= */}
            <section>
                <EventsFAQ />
            </section>

            <section>
                <EventsFinalCTA />
            </section>
        </Box>
    );
}
