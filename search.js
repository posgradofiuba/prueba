function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h3Text = section.querySelector("h3").innerText.trim();
        var links = section.querySelectorAll("a");

        links.forEach(function(link) {
            var linkText = link.innerText.trim().toLowerCase();
            var href = link.getAttribute("href");

            if (linkText === searchTerm) { // Comprobamos si el texto del enlace es igual al término de búsqueda exactamente
                var resultLink = document.createElement("a");
                resultLink.href = href;
                resultLink.textContent = h3Text + ": " + linkText; // Cambiamos el texto del enlace por el nombre del h3 y el texto del enlace
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
