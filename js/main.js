document.addEventListener("DOMContentLoaded", function(){

  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: false
    })
  }

  const offcanvas = document.getElementById('menumobile')

  if (offcanvas) {
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas)

    document.querySelectorAll('.offcanvas-link').forEach(link => {
      link.addEventListener('click', () => {
        bsOffcanvas.hide()
      })
    })
  }

  const tituloProyectos = document.getElementById("tituloProyectos");

  if (tituloProyectos) {
    setInterval(() => {
      tituloProyectos.classList.remove("animate__animated", "animate__headShake");

      void tituloProyectos.offsetWidth;

      tituloProyectos.classList.add("animate__animated", "animate__headShake");

      tituloProyectos.addEventListener("animationend", () => {
        tituloProyectos.classList.remove("animate__animated", "animate__headShake");
      }, { once: true });
    }, 8000);
  }

  const botonArriba = document.createElement("button");
  botonArriba.className = "scroll-top-btn";
  botonArriba.setAttribute("type", "button");
  botonArriba.setAttribute("aria-label", "Volver arriba");
  botonArriba.innerHTML = '<i class="bi bi-arrow-up"></i>';

  botonArriba.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  document.body.appendChild(botonArriba);
})
