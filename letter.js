const words = ["Bienvenue sur CrossFit Saint-Denis", "Libérer votre potentiel ", "Franchissez les barrières de votre zone de confort"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let typingInterval;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true;
      clearInterval(typingInterval);
      setTimeout(() => typingInterval = setInterval(type, 100), 2000); // Pause before deleting
      return;
    }
  }
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typingInterval = setInterval(type, 150); // Adjust typing speed
    } else {
      clearInterval(typingInterval);
    }
  });
}, {
  threshold: 0.5 // Adjust the threshold as needed
});

document.addEventListener("DOMContentLoaded", (event) => {
  const typewriterElement = document.getElementById("typewriter");
  observer.observe(typewriterElement);
});
