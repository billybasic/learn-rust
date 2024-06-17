// DOMContentLoaded event for theme toggle
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired for theme toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) {
        console.error('Theme toggle button not found');
        return;
    }
    console.log('Theme toggle button found');

    // Function to update theme text based on current mode
    function updateThemeText() {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            themeToggleBtn.textContent = 'Switch to light mode';
        } else {
            themeToggleBtn.textContent = 'Switch to dark mode';
        }
    }

    // Initial theme text update
    updateThemeText();

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    console.log('Initial theme set');

    themeToggleBtn.addEventListener('click', () => {
        console.log('Theme toggle button clicked');
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
        console.log('Theme updated to:', theme);

        // Update theme text after toggling
        updateThemeText();
    });
});

// Menu toggle function
function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

// DOMContentLoaded event for GitHub link
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired for GitHub link');
    const githubLinkBtn = document.getElementById('github-link');
    if (!githubLinkBtn) {
        console.error('GitHub link button not found');
        return;
    }

    githubLinkBtn.addEventListener('click', () => {
        window.location.href = 'https://github.com/billybasic/learn-rust';
    });
});
