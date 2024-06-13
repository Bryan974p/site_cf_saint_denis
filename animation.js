import { gsap } from "gsap";

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

export function initAnimations() {
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
