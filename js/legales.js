 //Script para el menú  toggle (Menú responsive)
  const toggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("#headernav nav ul");
  const links = menu.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.textContent = menu.classList.contains("active") ? '✕' : '☰';
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      toggle.textContent = '☰';
    });
  });

