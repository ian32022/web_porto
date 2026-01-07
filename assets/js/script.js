function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem(
        'theme',
        document.body.classList.contains('light-theme') ? 'light' : 'dark'
    );
}

function setActiveMenu(el) {
    document.querySelectorAll('.nav-links a')
        .forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}

// LOAD PREFERENCES
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
    }
});
