document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('menu');
    const submenuParent = document.querySelector('.menu_formation');
    const submenu = submenuParent.querySelector('.sous_menu');
    const submenuToggle = document.getElementById('menu_formation');

    // Assurer que le menu est bien fermé au chargement
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');

    // Ouvrir/fermer le menu hamburger
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêcher la propagation pour éviter les fermetures involontaires
        const isActive = nav.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
    });

    // Fermer le menu lorsqu'on clique en dehors
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Empêcher la fermeture du menu lors d'un clic sur un élément du menu
    nav.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Gérer le sous-menu sur mobile
    submenuToggle.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            submenuParent.classList.toggle('active');
        }
    });

    // Gérer le redimensionnement de la fenêtre pour fermer le menu sur grand écran
    
});






window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("remonter").classList.add("show");
    } else {
        document.getElementById("remonter").classList.remove("show");
    }
}







const images = [
    { url: 'https://lh3.googleusercontent.com/d/14-rOcox9nPcZlzv6tX9VwUZqvwA-I92x',   },
    { url: 'https://lh3.googleusercontent.com/d/13VfrNgJf7j8NKqKPIQy8nlw8g21IiUjJ',},
    

   
];

let index = 0;

function changerImageEtTexte() {
    index = (index + 1) % images.length;
    const div = document.getElementById('images');
    const texteDiv = document.getElementById('texte');

    div.style.backgroundImage = `url('${images[index].url}')`;
    texteDiv.textContent = images[index].texte;
    texteDiv.style.cssText = images[index].position ;
}

setInterval(changerImageEtTexte, 3000); // Change l'image et le texte toutes les 3 secondes









const statsSection = document.getElementById('stats');
const counters = document.querySelectorAll('.count');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting();
      observer.disconnect(); // Arrête l'observation une fois l'animation lancée
    }
  });
});

observer.observe(statsSection);

function startCounting() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-value');
    let count = 0;
    const increment = target / 200;

    function updateCount() {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    }

    updateCount();
  });
}










document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.temoignages-carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const temoignages = document.querySelectorAll('.temoignage');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < temoignages.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});


