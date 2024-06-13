// src/components/footer.js
export function createFooter() {
    const footer = `
      <footer class="bg-customBlack p-4 text-center text-white">
        <p>&copy; 2024 Crossfit Saint Denis. Tous droits réservés.</p>
      </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
  }
  