$(document).ready(function() {
    // Fonction pour récupérer les paramètres de l'URL
    function getUrlParams() {
        return new URLSearchParams(window.location.search);
    }

    // Récupérer les paramètres de l'URL
    const params = getUrlParams();

    // Récupérer les valeurs des paramètres
    const burgerName = params.get('name');
    const burgerPrice = params.get('price');
    const burgerImage = params.get('image');

    // Afficher les données dans la page
    $('#burgerName').text(burgerName);
    $('#burgerPrice').text(burgerPrice + " €");
    $('#burgerImage').attr('src', `./${burgerImage}`);
});