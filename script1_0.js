// Selecciona el botón hamburguesa y el menú
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Evento para abrir/cerrar menú
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
// Cerrar menú al hacer clic fuera
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnToggle = toggle.contains(event.target); // usar la misma variable

  if (!isClickInsideMenu && !isClickOnToggle) {
    menu.classList.remove("active");
  }
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('hero-track');
  const slides = document.querySelectorAll('.hero-slide');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });
});

 // seccion carrusel
let index = 0;
const contents = document.querySelectorAll(".hero-content");
const dots = document.querySelectorAll(".dot");
const hero = document.querySelector(".hero");

function showContent(n) {
  contents.forEach(c => c.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  contents[n].classList.add("active");
  dots[n].classList.add("active");

  // Cambiar fondo según el atributo data-bg
  const bg = contents[n].getAttribute("data-bg");
  hero.style.background = `url("${bg}") no-repeat center center/cover`;
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % contents.length;
  showContent(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + contents.length) % contents.length;
  showContent(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showContent(index);
  });
});




// Mostrar la primera sección al cargar
showContent(index);

// Selección de botones
const btnProyectosNav = document.querySelector('a[href="/proyectos/"]'); 
const btnNuestrosProyectos = document.querySelector('.hero-content a[href="/proyectos/"]'); 
const btnAutosElectricos = document.querySelector('.servicio a[href="AUTOSELECTRICOS/index.html"]');

// Función para resaltar con animación
function resaltarBoton(boton) {
  gsap.fromTo(boton, 
    { scale: 1, boxShadow: "0 0 0px #00ffcc" }, 
    { 
      scale: 1.1, 
      boxShadow: "0 0 20px #00ffcc", 
      duration: 0.8, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut" 
    }
  );
}

// Aplicar animación a los tres botones
resaltarBoton(btnProyectosNav);
resaltarBoton(btnNuestrosProyectos);
resaltarBoton(btnAutosElectricos);



// Seleccionamos el botón de Proyectos
const btn = document.getElementById("btn-proyectos");
const zone = btn.parentElement; // zona alrededor del botón
const strength = 0.2; // fuerza del efecto magnético

// Wiggle continuo en rotación
gsap.to(btn, {
  rotation: 12,
  duration: 1.5,
  repeat: -1,
  ease: "wiggle({wiggles:8, type:easeOut})"
});

// Efecto magnético al mover el mouse sobre la zona
zone.addEventListener("mousemove", (e) => {
  const rect = zone.getBoundingClientRect();
  const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, e.clientX);
  const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY);

  gsap.to(btn, {
    x: x * strength,
    y: y * strength,
    duration: 0.4,
    ease: "power2.out",
    overwrite: "auto"
  });
});

// Al salir del área, regresa suavemente al centro
zone.addEventListener("mouseleave", () => {
  gsap.to(btn, { 
    x: 0, 
    y: 0,
    duration: 0.7,
    ease: "elastic.out(1, 0.4)",
    overwrite: "auto"
  });
});
