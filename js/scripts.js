document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function updateSlides(direction) {
        // Remover clases anteriores
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next');
        });

        // Calcular nuevos índices
        let prevIndex = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        let nextIndex = (currentSlide + 1) % slides.length;

        // Aplicar clases según dirección
        if (direction === 'next') {
            slides[currentSlide].classList.add('prev');
            slides[nextIndex].classList.add('active');
            currentSlide = nextIndex;
        } else {
            slides[currentSlide].classList.add('next');
            slides[prevIndex].classList.add('active');
            currentSlide = prevIndex;
        }
    }

    prevBtn.addEventListener('click', () => updateSlides('prev'));
    nextBtn.addEventListener('click', () => updateSlides('next'));

    // Inicializar primer slide
    slides[0].classList.add('active');
});
