function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var searchResults = [];

    var links = document.querySelectorAll("a");

    links.forEach(function(link) {
        var linkText = link.innerText.trim().toLowerCase();
        var href = link.getAttribute("href");
        var h3Text = link.closest("section").querySelector("h3").innerText.trim();

        if (linkText.includes(searchTerm) && linkText.indexOf(searchTerm) === 0) {
            var resultLink = document.createElement("a");
            resultLink.href = href;
            resultLink.textContent = linkText;
            resultLink.target = "_blank";

            var resultItem = document.createElement("p");
            resultItem.innerHTML = "<strong>" + h3Text + ": </strong>";
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
