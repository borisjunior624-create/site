const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Réinitialiser les messages d'erreur
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valide = true;

  if (!nom) {
    document.getElementById("erreur-nom").textContent = "Le nom est requis.";
    valide = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("erreur-email").textContent = "Adresse email invalide.";
    valide = false;
  }

  if (!message) {
    document.getElementById("erreur-message").textContent = "Le message est requis.";
    valide = false;
  }

  if (valide) {
    confirmation.style.display = "block";
    form.reset();
  }
});


const navbarToggle = document.querySelector('.navbar-toggle');

const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu .classList.toggle('active');
})