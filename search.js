function search() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    var links = document.querySelectorAll("section a");

    var searchResults = [];

    links.forEach(function(link) {
        var linkText = link.innerText.toLowerCase();
        if (linkText === searchTerm) {
            searchResults.push(linkText);
        }
    });

    var searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            searchResultsElement.innerHTML += "<p>" + result + "</p>";
        });
    } else {
        searchResultsElement.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}
