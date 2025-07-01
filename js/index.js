
  
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


//Script para manejar el FAQ
  const questions = document.querySelectorAll(".faq_question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });



//Script para enviar whatsapps
  const form = document.getElementById('form-whatsapp');
  const numeroWhatsapp = '34605703746'; // Pon aquí tu número

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Honeypot check
    const honeypot = document.getElementById('website').value;
    if(honeypot) {
      // Bot detected, stop submission silently
      return;
    }

    const nombre = encodeURIComponent(document.getElementById('nombre').value.trim());
    const apellidos = encodeURIComponent(document.getElementById('apellidos').value.trim());
    const mensaje = encodeURIComponent(document.getElementById('mensaje').value.trim());

    const textoWhatsapp = `Hola, soy ${nombre} ${apellidos}. Me gustaría recibir más información sobre los servicios de Activa Salud Extremadura: %0A${mensaje}`;

    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoWhatsapp}`;

    window.open(urlWhatsapp, '_blank');
  });





