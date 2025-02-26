// Activar el menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu'); // Botón hamburguesa
    const navLinks = document.getElementById('nav-links'); // Contenedor del menú

    // Agregar evento de clic al botón hamburguesa
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el clic se propague fuera del menú
        navLinks.classList.toggle('active'); // Alternar la clase "active" para mostrar/ocultar el menú
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active'); // Eliminar la clase "active" si se hace clic fuera
        }
    });

    // Manejar clics en los enlaces del menú
    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Detener el comportamiento predeterminado temporalmente
            const href = event.target.getAttribute('href'); // Obtener el valor de href
            console.log("Redirigiendo a:", href); // Depuración: muestra la ruta en la consola
            if (href) {
                setTimeout(() => {
                    window.location.href = href; // Redirigir después de cerrar el menú
                }, 300); // Esperar 300ms para cerrar el menú antes de redirigir
            }
            navLinks.classList.remove('active'); // Cerrar el menú
        }
    });
});

// Funcionalidad del Slider (Compatible con múltiples páginas)
document.addEventListener('DOMContentLoaded', () => {
    // Detectar si hay un slider en la página actual
    const sliders = document.querySelectorAll('.services-slider');

    sliders.forEach((slider) => {
        let currentIndex = 0;
        const serviceItems = slider.querySelectorAll('.service-item-slider'); // Detectar todos los slides dentro del contenedor
        const totalSlides = serviceItems.length;

        // Función para activar un slide específico
        function activateSlide(index) {
            if (index < 0 || index >= totalSlides) return; // Evitar índices inválidos
            serviceItems.forEach((item, i) => {
                item.classList.remove('active'); // Eliminar la clase "active" de todos los slides
            });
            serviceItems[index].classList.add('active'); // Agregar la clase "active" al slide actual
            currentIndex = index; // Actualizar el índice actual
        }

        // Función para cambiar de slide
        function changeSlide(direction) {
            currentIndex = (currentIndex + direction + totalSlides) % totalSlides; // Calcular el nuevo índice
            activateSlide(currentIndex); // Activar el slide correspondiente
        }

        // Cambio automático cada 5 segundos
        let autoChangeInterval = setInterval(() => {
            changeSlide(1); // Avanzar al siguiente slide
        }, 30000);

        // Detener el cambio automático al interactuar con las flechas
        slider.querySelector('.slider-arrow.prev')?.addEventListener('click', () => {
            clearInterval(autoChangeInterval); // Detener el intervalo automático
            changeSlide(-1); // Retroceder al slide anterior
            // Reiniciar el intervalo después de 5 segundos
            setTimeout(() => {
                autoChangeInterval = setInterval(() => {
                    changeSlide(1);
                }, 30000);
            }, 30000);
        });

        slider.querySelector('.slider-arrow.next')?.addEventListener('click', () => {
            clearInterval(autoChangeInterval); // Detener el intervalo automático
            changeSlide(1); // Avanzar al siguiente slide
            // Reiniciar el intervalo después de 5 segundos
            setTimeout(() => {
                autoChangeInterval = setInterval(() => {
                    changeSlide(1);
                }, 30000);
            }, 30000);
        });
    });
});