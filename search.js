function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        const href = link.getAttribute('href');

        if (text.includes(input)) {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<a href="${href}">${text}</a>`;
            resultsContainer.appendChild(resultItem);
        }
    });
}
