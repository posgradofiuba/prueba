function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h3 = section.querySelector("h3");
        if (!h3) {
            console.error("No se encontró ningún elemento h3 dentro de la sección actual.");
            return;
        }
        var h3Text = h3.innerText.trim();

        var links = section.querySelectorAll("a");

        links.forEach(function(link) {
            var linkText = link.innerText.trim().toLowerCase();
            var href = link.getAttribute("href");

            if (linkText === searchTerm) {
                var resultLink = document.createElement("a");
                resultLink.href = href;
                resultLink.textContent = searchTerm;
                resultLink.target = "_blank";

                var resultItem = document.createElement("p");
                resultItem.innerHTML = "<strong>" + h3Text + ": </strong>";
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
