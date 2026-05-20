// Inicializar los iconos de Lucide
lucide.createIcons();

// Lógica para abrir y cerrar el menú móvil de forma clásica
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

// Función centralizada para cerrar el menú
const closeMenu = () => {
    mobileMenu.classList.remove('opacity-100');
    mobileMenu.classList.add('opacity-0');
    // Permitir scroll vertical en el contenedor principal nuevamente
    document.querySelector('.relative.w-full.h-dvh').classList.remove('overflow-hidden');
    
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 500);
    
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
};

menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        // Bloquear el scroll del contenedor principal mientras el menú esté abierto
        document.querySelector('.relative.w-full.h-dvh').classList.add('overflow-hidden');
        
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenu.classList.add('opacity-100');
        }, 10);
        
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        closeMenu();
    }
    // Re-renderizar el icono cambiado
    lucide.createIcons();
});

// Cerrar el menú automáticamente al hacer click en cualquier enlace interno
const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});