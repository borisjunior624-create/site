 let panier = [
      { nom: "Produit A", quantite: 2, prix: 15 },
      { nom: "Produit B", quantite: 1, prix: 25 },
      { nom: "Produit C", quantite: 3, prix: 10 }
    ];

    function afficherPanier() {
      const tbody = document.querySelector("#panier tbody");
      tbody.innerHTML = "";

      let totalGeneral = 0;

      panier.forEach((produit, index) => {
        const totalLigne = produit.quantite * produit.prix;
        totalGeneral += totalLigne;

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${produit.nom}</td>
          <td>${produit.quantite}</td>
          <td>${produit.prix.toFixed(2)}</td>
          <td>${totalLigne.toFixed(2)}</td>
          <td><button onclick="retirerArticle(${index})">Retirer</button></td>
        `;
        tbody.appendChild(tr);
      });

      document.getElementById("total-general").textContent =
        `Total général : ${totalGeneral.toFixed(2)} €`;
    }

    function retirerArticle(index) {
      panier.splice(index, 1);
      afficherPanier();
    }

    function viderPanier() {
      panier = [];
      afficherPanier();
    }

    function commander() {
      alert("Commande simulée ! Merci pour votre achat 😊");
    }

    afficherPanier();
