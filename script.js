// Particles.js setup
particlesJS("particles-js", {
  particles: {
    number: { value: 110, density: { enable: true, value_area: 800 } },
    color: { value: "#ff0000" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 4, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff0000",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// Rotating logo background
window.addEventListener("DOMContentLoaded", () => {
  const logo = document.createElement("div");
  logo.id = "rcb-logo-bg";
  document.body.appendChild(logo);
});

// Timeline scroll animation
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  const triggerPoint = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < triggerPoint) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);
