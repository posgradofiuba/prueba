function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h2Text = section.querySelector("h2").innerText.trim(); // Obtenemos el texto del h2 de la sección
        var h3Text = section.querySelector("h3").innerText.trim(); // Obtenemos el texto del h3 de la sección

        var links = section.querySelectorAll("a");
        links.forEach(function(link) {
            var linkText = link.innerText.trim().toLowerCase();
            var href = link.getAttribute("href");

            // Extraemos el número de resolución del texto del enlace
            var resolutionNumber = linkText.match(/\d+\/\d+/);
            if (resolutionNumber && resolutionNumber[0] === searchTerm) { // Comprobamos si el número de resolución coincide exactamente con el término de búsqueda
                var resultLink = document.createElement("a");
                resultLink.href = href;
                resultLink.textContent = h2Text + ' - ' + h3Text + ': ' + resolutionNumber[0]; // Mostramos el número de resolución en el enlace
                resultLink.target = "_blank";

                var resultItem = document.createElement("p");
                resultItem.appendChild(resultLink);

                searchResults.push(resultItem);
            }
        });
    });

    var searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            searchResultsElement.appendChild(result);
        });
    } else {
        searchResultsElement.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}
