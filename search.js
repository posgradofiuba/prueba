function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h2Text = section.querySelector("h2").innerText.trim(); // Obtenemos el texto del h2 de la sección

        var links = section.querySelectorAll("a");
        links.forEach(function(link) {
            var linkText = link.innerText.trim().toLowerCase();
            var href = link.getAttribute("href");

            var h3Text = link.parentElement.previousElementSibling.querySelector("h3").innerText.trim(); // Obtenemos el h3 específico del enlace

            if (linkText === searchTerm) { // Comprobamos si el texto del enlace coincide exactamente con el término de búsqueda
                var resultLink = document.createElement("a");
                resultLink.href = href;
                resultLink.textContent = linkText;
                resultLink.target = "_blank";

                var resultItem = document.createElement("p");
                resultItem.innerHTML = "<strong>" + h2Text + " - " + h3Text + ": </strong>"; // Usamos el h3 específico del enlace
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
