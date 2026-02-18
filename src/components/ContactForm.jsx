import { useMemo, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    MenuItem,
    Alert,
} from "@mui/material";

/**
 * ContactForm.jsx
 *
 * OBJETIVO UX:
 * - Capturar información mínima pero clave para ayudar a la pareja sin estrés.
 * - Mantener tono romántico y cercano (no agresivo).
 *
 * NOTA TÉCNICA:
 * - Por ahora el formulario "simula" envío (front-end).
 * - Luego conectamos a EmailJS, Formspree, Google Sheets, o tu backend.
 */
export default function ContactForm() {
    /**
     * 1) Estado del formulario (valores)
     * - Centralizamos en un objeto para manejarlo fácil
     */
    const [form, setForm] = useState({
        name: "",
        city: "",
        phone: "",
        email: "",
        destination: "",
        eventType: "", // ✅ NUEVO: tipo de evento (opcional)
        ceremony: "", // ✅ tipo de ceremonia (opcional)
        date: "",
        guests: "",
        budget: "",
        message: "",
    });

    /**
     * 2) Estado de UI
     * - submitting: deshabilita botón durante “envío”
     * - success: muestra mensaje de confirmación
     */
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    /**
     * 3) Lista de destinos (mock)
     * - Después puedes ampliarla o cargarla desde un JSON
     */
    const destinations = useMemo(
        () => ["Los Cabos", "Riviera Maya", "Cancún", "Puerto Vallarta", "Aún no sé"],
        []
    );

    /**
     * 3.1) ✅ NUEVO: Lista de tipos de evento (opcional)
     * - La usamos para renderizar un <select> fácilmente
     * - useMemo evita que el arreglo se "recree" en cada render
     */
    const eventTypes = useMemo(() => ["Boda", "Bautizo", "XV’s"], []);

    /**
     * 3.2) Lista de tipos de ceremonia (opcional)
     * - Lo agregamos como arreglo para renderizar un <select> fácilmente
     * - useMemo evita que el arreglo se "recree" en cada render (orden y limpieza)
     */
    const ceremonyTypes = useMemo(() => ["Católica", "Civil", "Simbólica"], []);

    /**
     * 4) Handler genérico de cambios
     * - Evita escribir un onChange diferente para cada campo
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /**
     * 5) Validación mínima (sin complicar)
     * - Evitamos fricción, pero pedimos lo esencial.
     */
    const isValid = () => {
        // Requerimos: nombre + al menos un medio de contacto + mensaje
        const hasContact = form.phone.trim() || form.email.trim();
        return form.name.trim() && hasContact && form.message.trim();
    };

    /**
     * 6) Submit (simulado)
     * - Ahora solo mostramos "success"
     * - Luego conectamos a un servicio real de envío
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Si no cumple lo mínimo, no enviamos
        if (!isValid()) return;

        setSubmitting(true);
        setSuccess(false);

        // Simulamos un envío (para UX)
        await new Promise((r) => setTimeout(r, 600));

        setSubmitting(false);
        setSuccess(true);

        // Reset del formulario después de enviar
        setForm({
            name: "",
            city: "",
            phone: "",
            email: "",
            destination: "",
            eventType: "", // ✅ reset
            ceremony: "", // ✅ reset
            date: "",
            guests: "",
            budget: "",
            message: "",
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            {/* Encabezado romántico */}
            <Typography
                sx={{
                    fontFamily: '"Sloop Script Pro", TT Commons Pro, sans-serif',
                    fontSize: { xs: 26, md: 32 },
                    color: "text.secondary",
                    mb: 1,
                }}
            >
                Hablemos de su gran día
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 30, md: 40 },
                    mb: 1.5,
                }}
            >
                Cuéntanos su idea
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7, mb: 3, maxWidth: 720 }}>
                Compártenos lo que sueñan vivir y nosotros te guiamos paso a paso. Puedes
                escribir lo básico ahora — lo afinamos juntos sin estrés.
            </Typography>

            {/* Mensaje de éxito (UX: confirma que se envió) */}
            {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    ¡Listo! Recibimos tu mensaje. Muy pronto te contactaremos para comenzar a planear su boda destino.
                </Alert>
            )}

            {/* Campos */}
            <Box
                sx={{
                    display: "grid",
                    gap: 16 / 8,
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                }}
            >
                {/* Nombre */}
                <TextField
                    label="Nombre"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ej. Ana y Luis"
                    fullWidth
                    required
                />

                {/* Ciudad */}
                <TextField
                    label="Ciudad"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Ej. Saltillo / Monterrey"
                    fullWidth
                />

                {/* Teléfono (solo números) */}
                <TextField
                    label="Teléfono"
                    name="phone"
                    value={form.phone}
                    placeholder="Ej. 8440000000"
                    fullWidth
                    inputMode="numeric"
                    pattern="[0-9]*"
                    inputProps={{ maxLength: 10 }}
                    onChange={(e) => {
                        // ✅ Filtramos para permitir solo números (sin espacios, letras o símbolos)
                        const onlyNumbers = e.target.value.replace(/\D/g, "");
                        setForm((prev) => ({ ...prev, phone: onlyNumbers }));
                    }}
                />

                {/* Email (validación nativa del navegador por type="email") */}
                <TextField
                    label="Correo"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Ej. ustedes@email.com"
                    type="email"
                    fullWidth
                />

                {/* Destino */}
                <TextField
                    label="Destino"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    select
                    fullWidth
                >
                    <MenuItem value="">Selecciona (opcional)</MenuItem>
                    {destinations.map((d) => (
                        <MenuItem key={d} value={d}>
                            {d}
                        </MenuItem>
                    ))}
                </TextField>

                {/* ✅ NUEVO: Tipo de evento (opcional) */}
                <TextField
                    label="Tipo de evento"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    select
                    fullWidth
                >
                    <MenuItem value="">Selecciona (opcional)</MenuItem>
                    {eventTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </TextField>

                {/* Tipo de ceremonia (opcional) */}
                <TextField
                    label="Tipo de ceremonia"
                    name="ceremony"
                    value={form.ceremony}
                    onChange={handleChange}
                    select
                    fullWidth
                >
                    <MenuItem value="">Selecciona (opcional)</MenuItem>
                    {ceremonyTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </TextField>

                {/* Fecha tentativa */}
                <TextField
                    label="Fecha tentativa"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    type="month"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />

                {/* Invitados */}
                <TextField
                    label="Invitados aprox."
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="Ej. 40"
                    fullWidth
                />

                {/* Presupuesto */}
                <TextField
                    label="Presupuesto aproximado"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder="Ej. $150,000 MXN"
                    fullWidth
                />

                {/* Mensaje (ocupa 2 columnas en desktop) */}
                <TextField
                    label="Cuéntanos su idea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ej. Queremos un evento íntimo en la playa, ceremonia al atardecer, y hotel all-inclusive..."
                    multiline
                    minRows={4}
                    fullWidth
                    required
                    sx={{ gridColumn: { xs: "auto", md: "1 / -1" } }}
                />
            </Box>

            {/* Botones */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={submitting || !isValid()}
                    sx={{ px: 4, py: 1.2 }}
                >
                    {submitting ? "Enviando..." : "Enviar mensaje"}
                </Button>

                {/* WhatsApp - número ya configurado */}
                <Button
                    component="a"
                    href="https://wa.me/5218445836644"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="large"
                    sx={{ px: 4, py: 1.2 }}
                >
                    Mejor por WhatsApp
                </Button>
            </Stack>

            {/* Nota de validación mínima */}
            <Typography sx={{ mt: 1.5, fontSize: 13, opacity: 0.7 }}>
                * Requerimos tu nombre, un medio de contacto (teléfono o correo) y un mensaje.
            </Typography>
        </Box>
    );
}
