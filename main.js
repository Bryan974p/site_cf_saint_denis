// Importer les fonctions nécessaires
import { createFooter } from './components/footer.js';
import './modal.js'; // Importation du fichier modal.js

// Menu hamburger 
document.getElementById('menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !isHidden);
    menu.classList.toggle('block', isHidden);
});

// Initialisation des animations
function splitText(element) {
    const chars = element.innerText.split("").map(char => {
        const span = document.createElement("span");
        span.innerText = char;
        element.appendChild(span);
        return span;
    });

    element.innerText = ""; // Vider le texte d'origine
    chars.forEach(span => element.appendChild(span)); // Ajouter les spans à l'élément
    return chars;
}

function initAnimations() {
    const tl = gsap.timeline();
    const heroTitle = document.querySelector("#hero-title");
    const heroSubtitle = document.querySelector("#hero-subtitle");

    const titleChars = splitText(heroTitle);
    const subtitleChars = splitText(heroSubtitle);

    gsap.set(heroTitle, { perspective: 400 });
    gsap.set(heroSubtitle, { perspective: 400 });

    console.log(titleChars);
    console.log(subtitleChars);

    tl.from(titleChars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.05
    }).from(subtitleChars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.05
    }, "-=0.4");

    document.getElementById("animate").onclick = function () {
        tl.restart();
    };
}

document.addEventListener('DOMContentLoaded', async () => {
    createFooter();
    console.log('Footer created');  // Vérifie si le footer est créé

    initAnimations();

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
            menuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');

            // Toggle icons
            menuButton.querySelector('svg:nth-of-type(1)').classList.toggle('hidden');
            menuButton.querySelector('svg:nth-of-type(2)').classList.toggle('hidden');
        });
    } else {
        console.error('Menu button or mobile menu not found');
    }

    // Fetch Instagram data and initialize Swiper
    const accessToken = 'b876daf9c430a1ed404f6faf59939304';
    const userId = '804190774771707';
    const media = await fetchInstagramData(accessToken, userId);
    const feedContainer = document.getElementById('instagram-feed');

    if (feedContainer) {
        media.forEach(item => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            if (item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM') {
                slide.innerHTML = `<img src="${item.media_url}" alt="${item.caption}" />`;
            } else if (item.media_type === 'VIDEO') {
                slide.innerHTML = `<video controls><source src="${item.media_url}" type="video/mp4"></video>`;
            }

            feedContainer.appendChild(slide);
        });

        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
