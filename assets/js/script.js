// Portfolio JavaScript - Theme toggle and interactive features

console.log('Portfolio loaded successfully!');

// Theme toggle functionality
function initializeTheme() {
    const themeSwitch = document.getElementById('theme-switch');
    const html = document.documentElement;
    const body = document.body;

    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Determine initial theme
    let currentTheme = 'light';
    if (savedTheme) {
        currentTheme = savedTheme;
    } else if (systemPrefersDark) {
        currentTheme = 'dark';
    }

    // Apply initial theme
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        body.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    } else {
        html.removeAttribute('data-theme');
        body.removeAttribute('data-theme');
        themeSwitch.checked = false;
    }

    // Theme toggle handler
    themeSwitch.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';

        // Apply theme instantly
        if (newTheme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            body.setAttribute('data-theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
            body.removeAttribute('data-theme');
        }

        // Persist to localStorage
        localStorage.setItem('theme', newTheme);
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only apply system preference if no saved theme
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            if (newTheme === 'dark') {
                html.setAttribute('data-theme', 'dark');
                body.setAttribute('data-theme', 'dark');
                themeSwitch.checked = true;
            } else {
                html.removeAttribute('data-theme');
                body.removeAttribute('data-theme');
                themeSwitch.checked = false;
            }
        }
    });
}

// Initialize theme on DOM load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Additional custom JavaScript can be added here
// For example: analytics, form handling, animations, etc.

// Example: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Example: Contact form validation (if you add a contact form later)
/*
function validateForm() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!email || !message) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}
*/