const slogan = document.querySelector('.graf-text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            slogan.classList.add('visible');

        } else {
            // Desaparece
            slogan.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });


observer.observe(slogan);