window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
// Obtener todos los elementos con la clase "dropdown-toggle"
const toggles = document.querySelectorAll('.dropdown-toggle');

// Agregar un evento de clic a cada toggle
toggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    // Obtener el siguiente elemento hermano (la lista desplegable)
    const content = this.nextElementSibling;

    // Alternar la visibilidad de la lista desplegable
    content.style.display === 'none' ? content.style.display = 'block' : content.style.display = 'none';
  });
});
