const listen_links = document.querySelectorAll('a.listen-links__link');

for (const link of listen_links) {
    link.addEventListener('click', function(e) {
        const action = link.dataset.action
        gtag('event', action);
    })
}