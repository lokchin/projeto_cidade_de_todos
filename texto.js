// texto.js
document.addEventListener("DOMContentLoaded", function() {
  const revealButton = document.getElementById("revealButton");
  const hiddenContent = document.getElementById("hiddenContent");

  // Inicialmente, ocultar o conteúdo oculto
  hiddenContent.style.display = "none";

  revealButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Mostrar o conteúdo oculto
    hiddenContent.style.display = "block";

    // Scroll suave para revelar o conteúdo oculto
    hiddenContent.scrollIntoView({ behavior: 'smooth' });

    // Desbloquear o scroll
    document.body.style.overflow = "auto";
  });
});
