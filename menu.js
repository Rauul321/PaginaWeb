const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
    navList.classList.toggle('active');
    // Cambiar el icono ☰ ↔ ✖
    mobileMenu.textContent = navList.classList.contains('active') ? '✖' : '☰';
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (navList.classList.contains('active') && !navList.contains(e.target) && e.target !== mobileMenu) {
        navList.classList.remove('active');
        mobileMenu.textContent = '☰';
    }
});