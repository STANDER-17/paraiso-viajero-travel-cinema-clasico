lucide.createIcons();

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mainContainer = document.querySelector('.relative.w-full.min-h-dvh');

// Función de cierre rápido para cuando se cambia de página
const forceCloseMenu = () => {
    mobileMenu.classList.remove('opacity-100');
    mobileMenu.classList.add('opacity-0', 'hidden');
    if (mainContainer) mainContainer.classList.remove('overflow-hidden');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
};

// Función de cierre con animación suave (para secciones internas)
const closeMenu = () => {
    mobileMenu.classList.remove('opacity-100');
    mobileMenu.classList.add('opacity-0');
    if (mainContainer) mainContainer.classList.remove('overflow-hidden');

    setTimeout(() => {
        // Doble verificación para evitar conflictos si ya se ocultó
        if (mobileMenu.classList.contains('opacity-0')) {
            mobileMenu.classList.add('hidden');
        }
    }, 500);

    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
};

// Control del botón Hamburguesa (Abrir / Cerrar)
menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        if (mainContainer) mainContainer.classList.add('overflow-hidden');

        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenu.classList.add('opacity-100');
        }, 10);

        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        closeMenu();
    }
    lucide.createIcons();
});

// Control inteligente de los clics en los enlaces del menú
const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Si el enlace apunta a otra página (contiene .html), cerramos al instante para no trabar la carga
        if (href && href.includes('.html')) {
            forceCloseMenu();
        } else {
            // Si es un ancla interna (#seccion), usamos el cierre con animación suave
            closeMenu();
        }
    });
});