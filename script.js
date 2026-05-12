// ================================
// SELECCIÓN DE ELEMENTOS
// ================================

const menu = document.querySelector("nav");
const header = document.querySelector("#mi-encabezado");

// Altura del encabezado
const headerHeight = header.offsetHeight;

// ================================
// EFECTO SCROLL EN EL MENÚ
// ================================

window.addEventListener("scroll", () => {

    // Cuando el usuario baja
    if (window.scrollY > headerHeight - 100) {

        menu.style.background = "rgba(7, 20, 38, 0.95)";
        menu.style.backdropFilter = "blur(12px)";
        menu.style.boxShadow = "0px 4px 15px rgba(0,0,0,0.3)";
        menu.style.padding = "15px 40px";

    } 
    
    // Cuando vuelve arriba
    else {

        menu.style.background = "rgba(0, 0, 0, 0.15)";
        menu.style.backdropFilter = "blur(6px)";
        menu.style.boxShadow = "none";
        menu.style.padding = "18px 40px";
    }
});

// ================================
// ANIMACIÓN SUAVE DEL HEADER
// ================================

window.addEventListener("load", () => {

    header.style.opacity = "0";
    header.style.transform = "translateY(-20px)";

    setTimeout(() => {

        header.style.transition = "all 1.2s ease";

        header.style.opacity = "1";
        header.style.transform = "translateY(0)";

    }, 200);
});

// ================================
// EFECTO HOVER DINÁMICO EN LINKS
// ================================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "scale(1.1)";
        link.style.transition = "0.3s ease";
    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "scale(1)";
    });
});