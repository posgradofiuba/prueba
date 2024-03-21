function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var links = document.querySelectorAll("section a");
    var searchResults = [];

    links.forEach(function(link) {
        var linkText = link.innerText.trim().toLowerCase();
        var href = link.getAttribute("href");
        if (linkText === searchTerm || href.includes(searchTerm)) {
            searchResults.push({ text: linkText, href: href });
        }
    });

    var searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            searchResultsElement.innerHTML += "<p>" + result.text + "</p>";
        });
    } else {
        searchResultsElement.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}
