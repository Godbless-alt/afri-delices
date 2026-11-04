/* AfriDélices — catalogue des recettes : données, recherche et filtres */

(function () {
  "use strict";

  /* ==========================================================
     DONNÉES — pour ajouter une recette :
     1) créer sa fiche dans le dossier recette/ (copier une fiche existante)
     2) ajouter un bloc dans RECETTES ci-dessous avec le même "slug"
     ========================================================== */
  var PAYS = [
    {
      "slug": "togo",
      "nom": "Togo",
      "classe": "d-tg"
    },
    {
      "slug": "cote-d-ivoire",
      "nom": "Côte d'Ivoire",
      "classe": "d-ci"
    },
    {
      "slug": "senegal",
      "nom": "Sénégal",
      "classe": "d-sn"
    },
    {
      "slug": "benin",
      "nom": "Bénin",
      "classe": "d-bj"
    },
    {
      "slug": "mali",
      "nom": "Mali",
      "classe": "d-ml"
    },
    {
      "slug": "cameroun",
      "nom": "Cameroun",
      "classe": "d-cm"
    },
    {
      "slug": "ghana",
      "nom": "Ghana",
      "classe": "d-gh"
    },
    {
      "slug": "nigeria",
      "nom": "Nigéria",
      "classe": "d-ng"
    }
  ];

  var CATEGORIES = [
    {
      "slug": "plat-principal",
      "nom": "Plat principal"
    },
    {
      "slug": "accompagnement",
      "nom": "Accompagnement"
    },
    {
      "slug": "sauce",
      "nom": "Sauce"
    },
    {
      "slug": "dessert",
      "nom": "Dessert"
    },
    {
      "slug": "boisson",
      "nom": "Boisson"
    }
  ];

  var RECETTES = [
    {
      "slug": "fufu-sauce-graine",
      "nom": "Fufu et sauce graine",
      "pays": "togo",
      "categorie": "plat-principal",
      "duree": "1 h 30",
      "difficulte": "Moyen",
      "portions": 6,
      "image": "fufu-sauce-graine.webp",
      "alt": "Fufu servi avec une sauce graine",
      "resume": "Boules d'igname pilée accompagnées d'une sauce à la noix de palme, à la viande et au poisson fumé.",
      "mots": [
        "1,2 kg d'igname",
        "1 litre d'eau pour la cuisson",
        "1 pincée de sel",
        "600 g de viande de bœuf ou de poulet en morceaux",
        "200 g de poisson fumé",
        "800 g de pulpe de noix de palme (ou 1 boîte de concentré de noix de palme)",
        "2 oignons",
        "3 gousses d'ail",
        "2 tomates mûres",
        "1 piment (au goût)",
        "2 cm de gingembre",
        "2 cubes de bouillon",
        "Sel"
      ]
    },
    {
      "slug": "attieke-poisson",
      "nom": "Attiéké poisson",
      "pays": "cote-d-ivoire",
      "categorie": "plat-principal",
      "duree": "45 min",
      "difficulte": "Facile",
      "portions": 4,
      "image": "attieke-poisson.webp",
      "alt": "Attiéké accompagné de poisson braisé",
      "resume": "Semoule de manioc servie avec un poisson braisé mariné et une salade fraîche.",
      "mots": [
        "4 tilapias ou carpes (environ 350 g pièce), vidés et écaillés",
        "4 gousses d'ail",
        "3 cm de gingembre",
        "1 oignon",
        "1 à 2 piments",
        "Le jus de 1 citron",
        "2 cuillères à soupe d'huile",
        "Sel et poivre",
        "600 g d'attiéké (précuit)",
        "3 tomates",
        "2 oignons",
        "1 concombre",
        "Le jus de 1 citron",
        "2 cuillères à soupe d'huile",
        "Sel"
      ]
    },
    {
      "slug": "thieboudienne",
      "nom": "Thiéboudienne",
      "pays": "senegal",
      "categorie": "plat-principal",
      "duree": "1 h 30",
      "difficulte": "Moyen",
      "portions": 6,
      "image": "thieboudienne.webp",
      "alt": "Thiéboudienne : riz au poisson et aux légumes",
      "resume": "Riz cuit dans un bouillon de tomate, servi avec du poisson farci et des légumes.",
      "mots": [
        "1 kg de poisson blanc ferme (thiof, mérou ou dorade) en tronçons",
        "1 petit bouquet de persil",
        "4 gousses d'ail",
        "1 oignon",
        "1 piment",
        "Sel et poivre",
        "150 ml d'huile",
        "2 oignons",
        "2 tomates fraîches",
        "3 cuillères à soupe de concentré de tomate",
        "2 cubes de bouillon",
        "1 aubergine",
        "2 carottes",
        "1/4 de chou",
        "1 navet",
        "300 g de manioc",
        "600 g de riz brisé (ou riz long grain)"
      ]
    },
    {
      "slug": "riz-au-gras",
      "nom": "Riz au gras",
      "pays": "mali",
      "categorie": "plat-principal",
      "duree": "1 h",
      "difficulte": "Moyen",
      "portions": 6,
      "image": "riz-au-gras.webp",
      "alt": "Riz au gras avec de la viande",
      "resume": "Riz parfumé cuit dans une sauce tomate avec de la viande et des légumes.",
      "mots": [
        "600 g de riz long grain",
        "700 g de viande (mouton, bœuf ou poulet) en morceaux",
        "3 oignons",
        "3 tomates",
        "3 cuillères à soupe de concentré de tomate",
        "1 poivron",
        "4 gousses d'ail",
        "1 piment",
        "2 carottes",
        "150 ml d'huile",
        "2 cubes de bouillon",
        "1 branche de thym",
        "Sel et poivre",
        "1 litre d'eau"
      ]
    },
    {
      "slug": "pate-sauce-arachide",
      "nom": "Pâte et sauce d'arachide",
      "pays": "togo",
      "categorie": "plat-principal",
      "duree": "1 h",
      "difficulte": "Moyen",
      "portions": 6,
      "image": "pate-sauce-arachide.webp",
      "alt": "Pâte servie avec une sauce d'arachide",
      "resume": "Pâte de maïs accompagnée d'une sauce onctueuse à la pâte d'arachide et à la viande.",
      "mots": [
        "500 g de farine de maïs",
        "1,2 litre d'eau",
        "1 pincée de sel",
        "300 g de pâte d'arachide (sans sucre ni sel)",
        "700 g de poulet ou de bœuf en morceaux",
        "2 oignons",
        "3 tomates",
        "2 cuillères à soupe de concentré de tomate",
        "3 gousses d'ail",
        "2 cm de gingembre",
        "1 piment",
        "3 cuillères à soupe d'huile",
        "2 cubes de bouillon",
        "Sel",
        "1 litre d'eau"
      ]
    },
    {
      "slug": "alloco",
      "nom": "Alloco",
      "pays": "cote-d-ivoire",
      "categorie": "accompagnement",
      "duree": "25 min",
      "difficulte": "Facile",
      "portions": 4,
      "image": "alloco.webp",
      "alt": "Alloco : bananes plantains frites dorées",
      "resume": "Bananes plantains mûres frites, servies avec une sauce tomate pimentée.",
      "mots": [
        "4 bananes plantains bien mûres (peau jaune tachetée de noir)",
        "500 ml d'huile de friture",
        "1 pincée de sel",
        "2 oignons",
        "2 tomates",
        "1 piment",
        "3 cuillères à soupe d'huile",
        "Sel"
      ]
    },
    {
      "slug": "bissap",
      "nom": "Bissap (jus d'hibiscus)",
      "pays": "senegal",
      "categorie": "boisson",
      "duree": "20 min + repos",
      "difficulte": "Facile",
      "portions": 6,
      "image": "bissap.webp",
      "alt": "Verres de jus de bissap rouge avec de la menthe",
      "resume": "Boisson rafraîchissante à base de fleurs d'hibiscus, sucrée et parfumée à la menthe.",
      "mots": [
        "100 g de fleurs d'hibiscus séchées (bissap)",
        "1,5 litre d'eau",
        "150 g de sucre (à ajuster selon le goût)",
        "1 petite poignée de feuilles de menthe",
        "1 sachet de sucre vanillé (facultatif)",
        "Glaçons pour servir"
      ]
    }
  ];

  /* ---------- Outils ---------- */
  function normaliser(texte) {
    return String(texte || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  function trouver(liste, slug) {
    for (var i = 0; i < liste.length; i++) {
      if (liste[i].slug === slug) { return liste[i]; }
    }
    return null;
  }

  function icone(id) {
    return '<svg class="icone" aria-hidden="true"><use href="#' + id + '"/></svg>';
  }

  /* ---------- Éléments de la page ---------- */
  var conteneurPays = document.getElementById("filtre-pays");
  var conteneurCategories = document.getElementById("filtre-categorie");
  var liste = document.getElementById("liste-recettes");
  var infoResultats = document.getElementById("nb-resultats");
  var messageVide = document.getElementById("message-vide");
  var texteVide = document.getElementById("texte-vide");
  var champ = document.getElementById("champ-recherche");
  var formulaire = document.getElementById("form-recherche");

  if (!liste || !conteneurPays || !conteneurCategories) { return; }

  /* ---------- État (lu depuis l'adresse : ?q=...&pays=...&categorie=...) ---------- */
  var params = new URLSearchParams(window.location.search);
  var etat = {
    q: params.get("q") || "",
    pays: trouver(PAYS, params.get("pays")) ? params.get("pays") : "",
    categorie: trouver(CATEGORIES, params.get("categorie")) ? params.get("categorie") : ""
  };

  function compter(critere, valeur) {
    return RECETTES.filter(function (r) { return r[critere] === valeur; }).length;
  }

  /* ---------- Construction des filtres ---------- */
  function option(nom, valeur, libelle, classeDrapeau, nombre, coche) {
    var label = document.createElement("label");
    label.className = "filtre-option";

    var entree = document.createElement("input");
    entree.type = "radio";
    entree.name = nom;
    entree.value = valeur;
    entree.checked = coche;

    var texte = document.createElement("span");
    if (classeDrapeau) {
      var drapeau = document.createElement("span");
      drapeau.className = "drapeau " + classeDrapeau;
      drapeau.setAttribute("aria-hidden", "true");
      texte.appendChild(drapeau);
    }
    texte.appendChild(document.createTextNode(libelle));
    var compte = document.createElement("span");
    compte.className = "compte";
    compte.textContent = nombre;
    texte.appendChild(compte);

    label.appendChild(entree);
    label.appendChild(texte);
    return label;
  }

  function construireFiltres() {
    conteneurPays.innerHTML = "";
    conteneurPays.appendChild(option("pays", "", "Tous les pays", "", RECETTES.length, etat.pays === ""));
    PAYS.forEach(function (p) {
      conteneurPays.appendChild(option("pays", p.slug, p.nom, p.classe, compter("pays", p.slug), etat.pays === p.slug));
    });

    conteneurCategories.innerHTML = "";
    conteneurCategories.appendChild(option("categorie", "", "Toutes les catégories", "", RECETTES.length, etat.categorie === ""));
    CATEGORIES.forEach(function (c) {
      var n = compter("categorie", c.slug);
      if (n > 0 || etat.categorie === c.slug) {
        conteneurCategories.appendChild(option("categorie", c.slug, c.nom, "", n, etat.categorie === c.slug));
      }
    });
  }

  /* ---------- Cartes ---------- */
  function creerCarte(r) {
    var pays = trouver(PAYS, r.pays);

    var lien = document.createElement("a");
    lien.className = "carte-recette";
    lien.href = "recette/" + r.slug + ".html";

    var media = document.createElement("div");
    media.className = "media";

    var badge = document.createElement("span");
    badge.className = "badge-pays";
    var drapeau = document.createElement("span");
    drapeau.className = "drapeau " + (pays ? pays.classe : "");
    drapeau.setAttribute("aria-hidden", "true");
    badge.appendChild(drapeau);
    badge.appendChild(document.createTextNode(pays ? pays.nom : ""));
    media.appendChild(badge);

    var image = document.createElement("img");
    image.src = "assets/images/" + r.image;
    image.alt = r.alt;
    image.width = 800;
    image.height = 600;
    image.loading = "lazy";
    image.addEventListener("error", function () { image.style.display = "none"; });
    media.appendChild(image);

    var corps = document.createElement("div");
    corps.className = "carte-corps";
    var titre = document.createElement("h3");
    titre.textContent = r.nom;
    var infos = document.createElement("div");
    infos.className = "carte-infos";
    infos.innerHTML = "<span>" + icone("i-horloge") + "</span><span>" + icone("i-toque") + "</span>";
    infos.children[0].appendChild(document.createTextNode(r.duree));
    infos.children[1].appendChild(document.createTextNode(r.difficulte));
    corps.appendChild(titre);
    corps.appendChild(infos);

    lien.appendChild(media);
    lien.appendChild(corps);
    return lien;
  }

  /* ---------- Filtrage et affichage ---------- */
  function correspond(r) {
    if (etat.pays && r.pays !== etat.pays) { return false; }
    if (etat.categorie && r.categorie !== etat.categorie) { return false; }
    var mots = normaliser(etat.q).split(/\s+/).filter(Boolean);
    if (mots.length === 0) { return true; }
    var pays = trouver(PAYS, r.pays);
    var texte = normaliser([r.nom, pays ? pays.nom : "", r.resume, r.mots.join(" ")].join(" "));
    return mots.every(function (mot) { return texte.indexOf(mot) !== -1; });
  }

  function mettreAJourAdresse() {
    var p = new URLSearchParams();
    if (etat.q) { p.set("q", etat.q); }
    if (etat.pays) { p.set("pays", etat.pays); }
    if (etat.categorie) { p.set("categorie", etat.categorie); }
    var requete = p.toString();
    try {
      window.history.replaceState(null, "", window.location.pathname + (requete ? "?" + requete : ""));
    } catch (erreur) {
      /* certains navigateurs refusent cette opération sur un fichier local : sans conséquence */
    }
  }

  function afficher() {
    var resultats = RECETTES.filter(correspond);
    liste.innerHTML = "";
    resultats.forEach(function (r) { liste.appendChild(creerCarte(r)); });

    if (resultats.length === 0) {
      infoResultats.textContent = "";
      messageVide.hidden = false;
      var pays = trouver(PAYS, etat.pays);
      if (etat.q) {
        texteVide.textContent = "Aucune recette ne correspond à « " + etat.q + " ».";
      } else if (pays && !etat.categorie) {
        texteVide.textContent = "Aucune recette de " + pays.nom + " pour le moment. D'autres arrivent bientôt !";
      } else {
        texteVide.textContent = "Aucune recette ne correspond à ces filtres.";
      }
    } else {
      messageVide.hidden = true;
      infoResultats.textContent = resultats.length + (resultats.length > 1 ? " recettes trouvées" : " recette trouvée");
    }
    mettreAJourAdresse();
  }

  function reinitialiser() {
    etat.q = "";
    etat.pays = "";
    etat.categorie = "";
    champ.value = "";
    construireFiltres();
    afficher();
  }

  /* ---------- Événements ---------- */
  champ.value = etat.q;
  champ.addEventListener("input", function () { etat.q = champ.value; afficher(); });
  formulaire.addEventListener("submit", function (evenement) { evenement.preventDefault(); etat.q = champ.value; afficher(); });

  document.addEventListener("change", function (evenement) {
    var cible = evenement.target;
    if (cible && cible.type === "radio" && (cible.name === "pays" || cible.name === "categorie")) {
      etat[cible.name] = cible.value;
      afficher();
    }
  });

  document.getElementById("reinitialiser").addEventListener("click", reinitialiser);
  document.getElementById("reinitialiser-vide").addEventListener("click", reinitialiser);

  construireFiltres();
  afficher();
})();
