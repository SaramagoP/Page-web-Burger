//-------Button en JS-------//
// $(document).ready(function () {

//   function toggleMode() {
//       document.body.classList.toggle('dark-mode');

//       let btn = document.getElementById('nuitModeBtn');
//       if (document.body.classList.contains('dark-mode')) {
//           btn.textContent = 'Jour';
//       } else {
//           btn.textContent = 'Nuit';
//       }
//   }
// document.getElementById('nuitModeBtn').addEventListener('click', toggleMode);
// });

//-------------------Button en JQuery-------------------//
$(document).ready(() => {
  // Variable pour suivre le mode (jour/nuit)
  let mode = "jour";

  // Fonction pour basculer entre le mode jour et nuit
  function toggleMode() {
    if (mode === "jour") {
      $("body").css("background-color", "#000000");
      $("#mode").text("Nuit");
      mode = "nuit";
    } else {
      $("body").css("background-color", "#ffffff");
      $("#mode").text("Jour");
      mode = "jour";
    }
  }
  // Événement de clic sur le bouton pour changer de mode
  $("#mode").click(function () {
    toggleMode();
  });

  // Votre code pour récupérer les données et afficher les burgers
  async function fetchData() {
    try {
      const response = await $.ajax({
        url: "https://titi.startwin.fr/products/type/burger",
        type: "GET", // Pour recuperer des donnes
        dataType: "json",
      });
      console.log(response);
      displayBurger(response); // Appel de la fonction pour afficher les burgers
    } catch (error) {
      console.log("Erreur:", error);
    }
  }
  fetchData();

  //Function pour gerer les cards :
  function displayBurger(burgers) {
    const root = $('.row');
    burgers.forEach(burger => {
        const imagePath = burger.image.replace(/\\/g, '/'); // Remplacer les barres obliques inversées par des barres obliques normales
        const card = `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <a href="detail.html?name=${burger.name}&price=${burger.price.$numberDecimal}&image=${imagePath}" class="text-decoration-none text-dark">
            <div class="card">
                <img src="./${imagePath}" class="card-img-top" alt="${burger.name}">
                <div class="card-body">
                    <h5 class="card-title">${burger.name}</h5>
                    <p class="card-text">${burger.description}</p>
                    <p class="card-text">${burger.price.$numberDecimal} €</p>
                </div>
            </div>
            </a>
        </div>
        `;
      root.append(card);
    });
  }
}); // FIN DOCUMENT READY
