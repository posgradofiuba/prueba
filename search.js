function search() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    var links = document.querySelectorAll("section a");

    var searchResults = [];

    links.forEach(function(link) {
        var linkText = link.innerText.toLowerCase(); 
        if (linkText.includes(searchTerm)) { 
            searchResults.push(link.href);
        }
    });

    var searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = ""; 
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            searchResultsElement.innerHTML += "<p><a href='" + result + "'>" + result + "</a></p>";
        });
    } else {
        searchResultsElement.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}
