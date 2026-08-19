const toggleTheme = document.getElementById('theme-button');
const htmlElement = document.documentElement;

toggleTheme.addEventListener('click', () => {
    htmlElement.setAttribute('data-theme', htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
});