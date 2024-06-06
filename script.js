// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navLinks.classList.add('hidden');
        } else {
            navLinks.classList.remove('hidden');
            navLinks.classList.add('active');
        }
    });
});