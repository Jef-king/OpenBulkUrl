const urlInput = document.getElementById('urlInput');
const count = document.getElementById('count');
const status = document.getElementById('status');
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('theme-dark', isDark);
    themeToggle.querySelector('.toggle-icon').textContent = isDark ? '☀️' : '🌙';
    themeToggle.querySelector('.toggle-text').textContent = isDark ? 'Light' : 'Dark';
    themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    localStorage.setItem('openBulkUrlTheme', theme);
}

function getUrls() {
    return urlInput.value
        .split(/\r?\n/)
        .map((url) => url.trim())
        .filter(Boolean);
}

function updateCount() {
    const total = getUrls().length;
    count.textContent = `${total} ${total === 1 ? 'link' : 'links'}`;
}

function openUrls() {
    const urls = getUrls();

    if (!urls.length) {
        status.textContent = 'Add at least one URL to continue.';
        urlInput.focus();
        return;
    }

    let opened = 0;

    urls.forEach((value) => {
        const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;

        if (URL.canParse(url)) {
            window.open(url, '_blank', 'noopener');
            opened++;
        }
    });

    status.textContent = opened === urls.length
        ? `${opened} ${opened === 1 ? 'tab' : 'tabs'} opened.`
        : `${opened} of ${urls.length} entries opened. Check the remaining URLs.`;
}

urlInput.addEventListener('input', updateCount);
urlInput.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        openUrls();
    }
});

themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
});

document.getElementById('openButton').addEventListener('click', openUrls);

const savedTheme = localStorage.getItem('openBulkUrlTheme') || 'light';
applyTheme(savedTheme);
updateCount();
