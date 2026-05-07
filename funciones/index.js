//Función para mover el carousel con los botones
function moveSlide(trackId, dotsId, direction) {
    const track = document.getElementById(trackId);

    //Verificar si el track existe antes de intentar manipularlo
    if (!track) return;

    //Busca todas la imagenes dentro del carousel
    const slides = track.querySelectorAll('.carousel-slide'); 
    //Busca el contenedor de los puntos de navegación
    const dotsContainer = document.getElementById(dotsId);
    //Busca los puntos dentro del contenedor
    const dots = dotsContainer.querySelectorAll('.dot');

    //Encuentra el índice de la imagen activa actualmente
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    //Remueve la clase 'active' de la imagen y el punto actual para ocultarlos
    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    let newIndex = activeIndex + direction;
    //Si el nuevo índice es menor que 0, vuelve al último slide
    if (newIndex >= slides.length) newIndex = 0;
    //Si el nuevo índice es mayor o igual al número de slides, vuelve al primer slide
    if (newIndex < 0) newIndex = slides.length - 1;

    //Agrega la clase 'active' a la nueva imagen y al nuevo punto para mostrarlos
    slides[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');

}

//Funcion para mover el carousel automáticamente con los puntos 

function jumpToSlide(trackId, dotsId, index) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById(dotsId);
    const dots = dotsContainer.querySelectorAll('.dot');

    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    slides[index].classList.add('active');
    dots[index].classList.add('active');
} 

    setInterval(() => {
        moveSlide('track1', 'dots1', 1);
        moveSlide('track2', 'dots2', 1); 
    }, 3000);