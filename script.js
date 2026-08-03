document.addEventListener("DOMContentLoaded", () => {
    // 1. Carrusel del Banner Principal
    const slides = document.querySelectorAll(".slide");
    const controls = document.querySelectorAll(".control");
    let currentSlide = 0;
    const slideInterval = 10000; // 10 segundos exactos

    function cambiarImagen(nextIndex) {
        slides[currentSlide].classList.remove("active");
        controls[currentSlide].classList.remove("active");

        currentSlide = nextIndex;

        slides[currentSlide].classList.add("active");
        controls[currentSlide].classList.add("active");
    }

    function siguienteSlide() {
        let nextSlide = (currentSlide + 1) % slides.length;
        cambiarImagen(nextSlide);
    }

    // Automatización de cambio cada 10 segundos
    let autoSlide = setInterval(siguienteSlide, slideInterval);

    // Permitir cambiar manualmente desde los círculos inferiores
    controls.forEach((control, index) => {
        control.addEventListener("click", () => {
            clearInterval(autoSlide);
            cambiarImagen(index);
            autoSlide = setInterval(siguienteSlide, slideInterval);
        });
    });

    // 2. Galería Interactiva de Videos (Imagen 3)
    const thumbItems = document.querySelectorAll(".thumb-item");
    const mainVideoPlayer = document.getElementById("mainVideoPlayer");

    thumbItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remover clase activa de todas las miniaturas
            thumbItems.forEach(t => t.classList.remove("active"));
            // Activar la seleccionada
            item.classList.add("active");

            // Obtener la ruta del video y actualizar el reproductor principal
            const videoSrc = item.getAttribute("data-src");
            mainVideoPlayer.src = videoSrc;
            mainVideoPlayer.play();
        });
    });
});