const btn = document.getElementById('modo-oscuro');
const icon = btn.querySelector('i');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('modoOscuro', 'activado');
        icon.classList.replace('fa-moon', 'fa-sun'); // Cambiar luna por sol
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem('modoOscuro', 'desactivado');
        icon.classList.replace('fa-sun', 'fa-moon'); // Cambiar sol por luna
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('modoOscuro') === 'activado') {
        document.body.classList.add('dark-mode');
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>'; // o cambia icono si quieres
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

