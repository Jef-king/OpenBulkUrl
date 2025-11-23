function openUrls() {
    const urls = document.getElementById('urlInput').value.split('\n');
    urls.forEach(url => {
        if (url.trim()) {
            window.open(url.trim(), '_blank');
        }
    });
}
