    fetch('produits.json')
      .then(response => response.json())
      .then(produits => {
        const container = document.getElementById('produits-container');

        produits.forEach(produit => {
          const div = document.createElement('div');
          div.className = 'produit';

          div.innerHTML = `
            <img src="${produit.image}" alt="${produit.name}">
            <h3>${produit.name}</h3>
            <p>${produit.description}</p>
          `;

          container.appendChild(div);
        });
      })
      .catch(error => console.error('Erreur lors du chargement des produits :', error));



        var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
