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

// Slider automático y manual
let currentIndex = 0;
const serviceItems = document.querySelectorAll('.service-item');
const totalSlides = serviceItems.length;

function activateSlide(index) {
    serviceItems.forEach((item, i) => {
        item.classList.remove('active');
    });
    serviceItems[index].classList.add('active');
    currentIndex = index;
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    activateSlide(currentIndex);
}

// Cambiar automáticamente cada 5 segundos
let autoChangeInterval = setInterval(() => {
    changeSlide(1);
}, 50000);

// Detener el cambio automático al interactuar con las flechas
document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
    clearInterval(autoChangeInterval);
    changeSlide(-1);
    // Reiniciar el intervalo después de 5 segundos
    setTimeout(() => {
        autoChangeInterval = setInterval(() => {
            changeSlide(1);
        }, 50000);
    }, 50000);
});

document.querySelector('.slider-arrow.next').addEventListener('click', () => {
    clearInterval(autoChangeInterval);
    changeSlide(1);
    // Reiniciar el intervalo después de 5 segundos
    setTimeout(() => {
        autoChangeInterval = setInterval(() => {
            changeSlide(1);
        }, 50000);
    }, 50000);
});