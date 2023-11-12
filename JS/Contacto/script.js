const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
document.addEventListener('DOMContentLoaded', function () {
  const oscuridad = document.getElementById("oscuridad");
  const cerrar = document.getElementById('cerrar-menu')
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  function cerrarMenu() {
      // Remover la clase 'active' del hamburger-menu
      hamburgerMenu.classList.remove('active');
      // Ocultar el #oscuridad
      oscuridad.style.display = 'none';
  }

  if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', function () {
          this.classList.toggle('active');

          // Verificar si la clase 'active' está presente y ajustar el estilo del #oscuridad
          if (this.classList.contains('active')) {
              oscuridad.style.display = 'flex';
          } else {
              oscuridad.style.display = 'none';
          }
      });
  }

  if (cerrar) {
      cerrar.addEventListener('click', cerrarMenu);
  }

  if (oscuridad) {
      oscuridad.addEventListener('click', cerrarMenu);
  }

  // Agregar un evento de cambio en el tamaño de la ventana
  window.addEventListener('resize', function () {
      // Verificar si la resolución es mayor a 1000px
      if (window.innerWidth > 1050) {
          cerrarMenu();
      }
  });
});