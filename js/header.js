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

//Script para opacidad del header con el scroll
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    let scrollTop = window.scrollY;
    let maxScroll = 600; // Hasta este valor se irá oscureciendo

    // Calculamos opacidad proporcional al scroll (0 a 1)
    let opacity = Math.min(scrollTop / maxScroll, 1);
    
    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  });