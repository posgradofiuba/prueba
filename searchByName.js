function normalizeText(text) {
    console.log("Normalized text: ", text);
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function searchByName() {
    console.log("searchByName() function called");
    var searchTerm = normalizeText(document.getElementById("searchByNameInput").value.trim()); // Normalizar el término de búsqueda
    var searchResultsElement = document.getElementById("searchResultsByName");

    // Limpiar los resultados si el campo de búsqueda está vacío
    if (!searchTerm) {
        searchResultsElement.innerHTML = "";
        return;
    }

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h3 = section.querySelectorAll("h3");
        h3.forEach(function(h3Element) {
            var h3Text = normalizeText(h3Element.innerText.trim()); // Normalizar el texto del h3
            if (h3Text.includes(searchTerm)) {
                var links = h3Element.nextElementSibling.querySelectorAll("a");
                links.forEach(function(link) {
                    var href = link.getAttribute("href");
                    var linkText = normalizeText(link.innerText.trim()); // Normalizar el texto del enlace
                    
                    var resultLink = document.createElement("a");
                    resultLink.href = href;
                    resultLink.textContent = linkText; // Mantener el texto del enlace
                    resultLink.target = "_blank";

                    var resultItem = document.createElement("p");
                    resultItem.innerHTML = "<strong>" + h3Element.innerText.trim() + ": </strong>"; // Usar el texto original del h3
                    resultItem.appendChild(resultLink);

                    searchResults.push(resultItem);
                });
            }
        });
    });

    searchResultsElement.innerHTML = "";
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            searchResultsElement.appendChild(result);
        });
    } else {
        searchResultsElement.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}
