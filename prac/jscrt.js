const elementos = document.querySelectorAll(".animar");

const mostrar = () => {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", mostrar);
window.addEventListener("load", mostrar);