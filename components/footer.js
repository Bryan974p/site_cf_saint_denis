// src/components/footer.js
export function createFooter() {
    const footer = `
      <footer class="bg-customBlack">
    <div class=" py-4 text-white">
      <div class="container px-4 mx-auto">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 my-4 w-full xl:w-1/5">
            <div class="mb-4 lg:mb-0 ">
              <a href="#">
                <img src="./public/img/logo.webp" alt="Logo" class="h-32">
              </a>
            </div>
            </a>
          </div>

          
          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-customRed">Mentions légales </h2>
            </div>
            <p>
              <ul>
                <li>CrossFit Saint Denis – Eurl R’BOX</li>
                <li>infos@rboxcrossfit.com</li>
                <li>1 allée du Papillon 97490 Sainte-Clotilde</li>
                <li>Capital de 15000€ RCS 80870896000014</li><br>
              </ul>

            </p>
          </div>
          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-customRed">Liens</h2>
            </div>
            <ul class="leading-8">
              <li><a href="#" class="hover:text-customRed">Contact</a></li>
              <li><a href="#" class="hover:text-customRed">Tarifs</a></li>
              <li><a href="https://www.crossfitstdenis.com/wp-content/uploads/2019/12/cgvstdenis.pdf" class="hover:text-customRed">Conditions Générales de Vente</a></li>
            </ul>
          </div>
          <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-customRed">Nous suivre</h2>
            </div>
            
            <a href="#" class="inline-flex items-center h-8 w-8 border-gray-100 rounded-full hover:text-customRed hover:border-customRed">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" class="inline-flex items-center h-8 w-8 border-gray-100 rounded-full hover:text-customRed hover:customRed">
              <i class="fab fa-facebook text-2xl"></i>
            </a>
           
          </div>
        </div>
      </div>
    </div>
    <div class=" py-4 text-gray-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 w-full text-center sm:w-auto sm:text-left">
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 w-full text-center sm:w-auto sm:text-left">
            <p>&copy; 2024 Crossfit Saint Denis. Tous droits réservés.</p>
          </div>
          <div class="px-4 w-full text-center sm:w-auto sm:text-left">
            Made with ❤️ by Bryan F.
          </div>
        </div>
      </div>
    </div>
  </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
  }
  