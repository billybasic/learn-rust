document.addEventListener('DOMContentLoaded', () => {
    const githubLinkBtn = document.getElementById('github-link');
    if (!githubLinkBtn) {
        console.error('GitHub link button not found');
        return;
    }

    githubLinkBtn.addEventListener('click', () => {
        window.location.href = 'https://github.com/billybasic/learn-rust';
    });
});
