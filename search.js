function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        const href = link.getAttribute('href');

        if (text === input) {
            const h3Text = link.closest('h3').textContent;
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<p><strong>${h3Text}</strong>: <a href="${href}">${text}</a></p>`;
            resultsContainer.appendChild(resultItem);
        }
    });
}
