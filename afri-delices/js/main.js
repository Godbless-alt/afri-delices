/* AfriDélices — script commun à toutes les pages */

(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var bouton = document.getElementById("bouton-menu");
  var zoneMenu = document.getElementById("zone-menu");

  if (bouton && zoneMenu) {
    var iconeMenu = bouton.querySelector("use");

    function definirMenu(ouvert) {
      zoneMenu.classList.toggle("ouvert", ouvert);
      bouton.setAttribute("aria-expanded", String(ouvert));
      bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
      if (iconeMenu) {
        iconeMenu.setAttribute("href", ouvert ? "#i-fermer" : "#i-menu");
      }
    }

    bouton.addEventListener("click", function () {
      definirMenu(!zoneMenu.classList.contains("ouvert"));
    });

    // Ferme le menu quand on clique sur un lien
    zoneMenu.addEventListener("click", function (evenement) {
      if (evenement.target.closest("a")) {
        definirMenu(false);
      }
    });

    // Ferme le menu avec la touche Échap
    document.addEventListener("keydown", function (evenement) {
      if (evenement.key === "Escape" && zoneMenu.classList.contains("ouvert")) {
        definirMenu(false);
        bouton.focus();
      }
    });

    // Referme le menu si on repasse en grand écran
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1240) {
        definirMenu(false);
      }
    });
  }

  /* ---------- Images manquantes ----------
     Si une photo n'est pas encore dans assets/images/, on la masque :
     le dégradé chaud du conteneur .media reste visible, sans icône cassée. */
  document.querySelectorAll(".media img").forEach(function (image) {
    function masquer() {
      image.style.display = "none";
    }
    image.addEventListener("error", masquer);
    if (image.complete && image.naturalWidth === 0) {
      masquer();
    }
  });
})();
