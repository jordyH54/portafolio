document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambiar icono barras/X
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Cerrar menú al hacer clic en un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    // --- TU LÓGICA DE ANIMACIÓN (IntersectionObserver) ---
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Cambié '.section' por 'section' para que detecte tus etiquetas <section>
    document.querySelectorAll('section, header').forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(30px)";
        sec.style.transition = "all 0.8s ease-out";
        observer.observe(sec);
    });
});