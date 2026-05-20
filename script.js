// Inicializar los iconos de Lucide
lucide.createIcons();

// Lógica para abrir y cerrar el menú móvil de forma clásica
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenu.classList.add('opacity-100');
        }, 10);
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500);
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    // Re-renderizar el icono cambiado
    lucide.createIcons();
});