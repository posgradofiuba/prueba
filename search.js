function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var searchResults = [];

    var links = document.querySelectorAll("a");

    links.forEach(function(link) {
        var linkText = link.innerText.trim().toLowerCase();
        var href = link.getAttribute("href");
        var h3Text = findClosestH3(link).innerText.trim(); // Obtener el título específico de la carrera

        if (linkText.includes(searchTerm) && linkText.indexOf(searchTerm) === 0) {
            var resultLink = document.createElement("a");
            resultLink.href = href;
            resultLink.textContent = linkText;
            resultLink.target = "_blank";

            var resultItem = document.createElement("p");
            resultItem.innerHTML = "<strong>" + h3Text + ": </strong>"; // Usar el título específico de la carrera
            resultItem.appendChild(resultLink);

            searchResults.push(resultItem);
        }
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

function findClosestH3(element) {
    var ancestor = element.parentElement;
    while (ancestor) {
        if (ancestor.tagName === "SECTION") {
            return ancestor.querySelector("h3");
        }
        ancestor = ancestor.parentElement;
    }
    return null;
}
