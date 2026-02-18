import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Typography,
    IconButton,
    Drawer,
    Divider,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Import del logo (igual que antes)
import logo from "../assets/logo/silver-weddings-logo.png";

/**
 * Navbar (v4 — Responsive)
 *
 * OBJETIVO UX:
 * - Desktop: menú visible, limpio, con CTA "Contacto"
 * - Móvil: ícono hamburguesa + Drawer lateral con navegación
 *
 * POR QUÉ:
 * - La mayoría del tráfico (especialmente en bodas/viajes) llega desde móvil
 * - Un navbar no responsive baja conversiones (leads) y frustra al usuario
 */
export default function Navbar() {
    /* ---------------------------------------------------------
        1) Estado del Drawer (menú móvil)
        - open = true/false para mostrar/ocultar el menú lateral
    --------------------------------------------------------- */
    const [open, setOpen] = useState(false);

    /* ---------------------------------------------------------
        2) location:
        - Lo usamos para cerrar el Drawer cuando el usuario navega.
        - Esto evita que el menú se quede abierto después de dar click.
    --------------------------------------------------------- */
    const location = useLocation();

    /**
     * Abre o cierra el Drawer
     * - Reutilizable para onClick / onClose
     */
    const toggleDrawer = (value) => () => setOpen(value);

    /**
     * Links del menú en una sola fuente de verdad (DRY)
     * - Así no repetimos rutas en desktop y móvil.
     */
    const navItems = [
        { label: "Inicio", to: "/" },
        { label: "Bodas destino", to: "/bodas" },
        { label: "Destinos", to: "/destinos" },
        { label: "Nosotros", to: "/nosotros" },
    ];

    /* ---------------------------------------------------------
        3) Cierra el Drawer cuando cambia la ruta
        - UX: al tocar un link, el Drawer debe cerrarse automáticamente.
        - NOTA: en React Router, location cambia con la navegación.
    --------------------------------------------------------- */
    // OJO: no usamos useEffect para mantenerlo simple.
    // En este caso, al hacer click en un item, cerramos manualmente.
    // (ver onClick en ListItemButton)

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "transparent",
                color: "text.primary",
                backdropFilter: "blur(10px)", // sensación premium (vidrio suave)
            }}
        >
            <Toolbar sx={{ py: 1, display: "flex", alignItems: "center" }}>
                {/* =====================================================
            LOGO + DESCRIPTOR (clickeable a Home)
           ===================================================== */}
                <Box
                    component={NavLink}
                    to="/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        textDecoration: "none",
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="Silver Weddings"
                        sx={{
                            height: 44,
                            width: "auto",
                        }}
                    />

                    {/* Descriptor:
            - En móvil lo ocultamos para no saturar el navbar
              - En desktop lo mostramos para reforzar la marca */}
                    <Typography
                        sx={{
                            fontFamily: "TT Commons Pro, sans-serif",
                            fontSize: 16,
                            fontWeight: 600,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            color: "text.primary",
                            whiteSpace: "nowrap",
                            display: { xs: "none", md: "block" }, // <-- clave responsive
                        }}
                    >
                        Weddings & Travel
                    </Typography>
                </Box>

                {/* =====================================================
            DESKTOP MENU
            - Solo se muestra a partir de md
           ===================================================== */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" }, // <-- desktop only
                        gap: 1,
                        ml: "auto",
                        alignItems: "center",
                    }}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item.to}
                            component={NavLink}
                            to={item.to}
                            sx={{
                                textTransform: "none",
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}

                    {/* CTA destacado */}
                    <Button variant="contained" color="primary" component={NavLink} to="/contacto">
                        Contacto
                    </Button>
                </Box>

                {/* =====================================================
            MOBILE MENU BUTTON (Hamburguesa)
            - Solo se muestra en xs/sm
           ===================================================== */}
                <IconButton
                    onClick={toggleDrawer(true)}
                    sx={{
                        display: { xs: "inline-flex", md: "none" }, // <-- mobile only
                        ml: "auto",
                    }}
                    aria-label="Abrir menú"
                >
                    <MenuIcon />
                </IconButton>

                {/* =====================================================
            DRAWER (Menú lateral para móvil)
           ===================================================== */}
                <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                    {/* Contenedor del Drawer */}
                    <Box
                        sx={{
                            width: 300,
                            p: 2,
                        }}
                        role="presentation"
                    >
                        {/* Header del Drawer: marca compacta */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                            <Box component="img" src={logo} alt="Silver Weddings" sx={{ height: 36, width: "auto" }} />
                            <Typography
                                sx={{
                                    fontFamily: "TT Commons Pro, sans-serif",
                                    fontSize: 11,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "text.secondary",
                                }}
                            >
                                Weddings & Travel
                            </Typography>
                        </Box>

                        <Divider sx={{ mb: 1.5 }} />

                        {/* Lista de navegación móvil */}
                        <List sx={{ p: 0 }}>
                            {navItems.map((item) => (
                                <ListItemButton
                                    key={item.to}
                                    component={NavLink}
                                    to={item.to}
                                    onClick={() => setOpen(false)} // <-- cierra Drawer al navegar (UX)
                                    sx={{
                                        borderRadius: 2,
                                        mb: 0.5,
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            ))}
                        </List>

                        <Divider sx={{ my: 1.5 }} />

                        {/* CTA móvil: Contacto destacado */}
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            component={NavLink}
                            to="/contacto"
                            onClick={() => setOpen(false)} // <-- cierra Drawer al navegar
                        >
                            Contacto
                        </Button>

                        {/* Extra UX (opcional):
                - Luego podemos agregar WhatsApp directo aquí.
                - Y enlaces a Instagram. */}
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}
