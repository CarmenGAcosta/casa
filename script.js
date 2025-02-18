// Menú responsive
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Ejemplo de manejo de formulario
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Aquí podrías procesar la información del formulario,
  // por ejemplo, enviarla a tu servidor usando fetch o Ajax.
  // Para este ejemplo, sólo mostraremos un alert.
  alert(`Gracias por tu mensaje, ${nombre}.\nTe contactaremos pronto al correo: ${email}`);

  // Opcional: Limpiar campos del formulario
  contactForm.reset();
});


  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children); // Arreglo con cada .carousel-slide
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0; // Para saber qué imagen se está mostrando

  // Función para mostrar la diapositiva en el índice indicado
  function showSlide(index) {
    // Ajuste para no salirse del rango
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Evento botón "Siguiente"
  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  // Evento botón "Anterior"
  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("videoVertical");
  
    // Función para verificar si el video está en pantalla
    function checkVisibility() {
      const rect = video.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        if (video.paused) {
          video.play();
          video.muted = false; // Activa el sonido automáticamente
        }
      } else {
        video.pause(); // Se pausa cuando sale de pantalla
      }
    }
  
    // Detectar cuando el usuario hace scroll
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Ejecutar al cargar la página
  
    // Hacer clic en el video para pausar/reproducir manualmente
    video.addEventListener("click", function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
  