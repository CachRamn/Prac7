//Funciones contáctanos
const contactForm = document.getElementById('contactForm');


if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('¡Solicitud enviada! Nuestro equipo se pondrá en contacto contigo pronto.');
        contactForm.reset();
    });
}