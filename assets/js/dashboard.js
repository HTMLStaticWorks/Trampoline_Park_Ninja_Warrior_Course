document.addEventListener('DOMContentLoaded', () => {
    // --- Logout Redirect ---
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real app, clear session/token here
            window.location.href = 'index.html';
        });
    }

    // --- Dashboard Charts Placeholder (Simple CSS bars) ---
    // This could be expanded with a library like Chart.js, but user asked for Vanilla JS only.
    // We'll use simple DOM manipulation for dynamic feels.
    
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 500);
    });
});
