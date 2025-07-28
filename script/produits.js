let tousLesProduits = [];

async function chargerProduits() {
  const response = await fetch('produits.json');
  tousLesProduits = await response.json();
  genererFiltres(tousLesProduits);
  afficherProduits(tousLesProduits);
  mettreAJourCompteur();
}

function genererFiltres(produits) {
  const select = document.getElementById("filtre");
  const categories = [...new Set(produits.map(p => p.categorie))];

  categories.forEach(categorie => {
    const option = document.createElement("option");
    option.value = categorie;
    option.textContent = categorie;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const cat = select.value;
    if (cat === "tous") {
      afficherProduits(tousLesProduits);
    } else {
      const filtres = tousLesProduits.filter(p => p.categorie === cat);
      afficherProduits(filtres);
    }
  });
}

function afficherProduits(produits) {
  const listeProduits = document.getElementById("listeProduits");
  listeProduits.innerHTML = "";
  produits.forEach(produit => {
    const div = document.createElement("div");
    div.className = "produit";
    div.innerHTML = `
    <img src="${produit.image}" alt="${produit.name}">
    <h3>${produit.name}</h3>
    <p>${produit.description}</p>
    <p><strong>${produit.price.toFixed(2)} €</strong></p>
    <p>Stock : ${produit.stock}</p>
    <button onclick='ajouterAuPanier(${JSON.stringify(produit).replace(/'/g, "\\'")})'>Ajouter au panier</button>
  `;
    listeProduits.appendChild(div);
  });
}

function ajouterAuPanier(produit) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  const index = panier.findIndex(p => p.id === produit.id);

  if (index >= 0) {
    panier[index].quantite += 1;
  } else {
    panier.push({
      id: produit.id,
      name: produit.name,
      price: produit.price,
      quantite: 1
    });
  }

  localStorage.setItem("panier", JSON.stringify(panier));
  mettreAJourCompteur();
}

function mettreAJourCompteur() {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const total = panier.reduce((acc, item) => acc + item.quantite, 0);
  document.getElementById("panierCompteur").textContent = total;
}

chargerProduits();