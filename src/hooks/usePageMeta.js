import { useEffect } from "react";

/**
 * usePageMeta
 *
 * OBJETIVO:
 * - Definir título y metas básicas por ruta (SPA).
 *
 * NOTA SEO (honesta):
 * - Esto funciona bien para SEO básico.
 * - Para máxima compatibilidad con bots/redes, lo ideal es SSR/prerender.
 */
export default function usePageMeta({
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
} = {}) {
    useEffect(() => {
        // ====== TITLE ======
        if (title) document.title = title;

        // Helper: crea o actualiza <meta ...>
        const upsertMeta = (selector, attrs) => {
            let el = document.head.querySelector(selector);
            if (!el) {
                el = document.createElement("meta");
                document.head.appendChild(el);
            }
            Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        };

        // ====== DESCRIPTION ======
        if (description) {
            upsertMeta('meta[name="description"]', {
                name: "description",
                content: description,
            });
        }

        // ====== OPEN GRAPH (opcional) ======
        // Para que se vea bonito al compartir (WhatsApp/Facebook)
        const finalOgTitle = ogTitle || title;
        const finalOgDesc = ogDescription || description;

        if (finalOgTitle) {
            upsertMeta('meta[property="og:title"]', {
                property: "og:title",
                content: finalOgTitle,
            });
        }

        if (finalOgDesc) {
            upsertMeta('meta[property="og:description"]', {
                property: "og:description",
                content: finalOgDesc,
            });
        }

        if (ogImage) {
            upsertMeta('meta[property="og:image"]', {
                property: "og:image",
                content: ogImage,
            });
        }

        if (ogUrl) {
            upsertMeta('meta[property="og:url"]', {
                property: "og:url",
                content: ogUrl,
            });
        }

        // Buen default para OG
        upsertMeta('meta[property="og:type"]', {
            property: "og:type",
            content: "website",
        });
    }, [title, description, ogTitle, ogDescription, ogImage, ogUrl]);
}
