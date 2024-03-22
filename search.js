function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var links = section.querySelectorAll("a");
        links.forEach(function(link) {
            var linkText = link.innerText.trim().toLowerCase();
            var href = link.getAttribute("href");
            var h3Text = link.closest("ul").previousElementSibling.innerText.trim();

            if (linkText === searchTerm) {
                var resultLink = document.createElement("a");
                resultLink.href = href;
                resultLink.textContent = linkText;
                resultLink.target = "_blank";

                var trimmedH3Text = h3Text.replace("Laboratorio de Sistemas Embebidos (LSE) - ", "");
                var resultItem = document.createElement("p");
                resultItem.innerHTML = "<strong>" + trimmedH3Text + ": </strong>";
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
