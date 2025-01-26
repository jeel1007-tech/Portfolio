document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');

    console.log(menuIcon); // Check if menuIcon is selected
    console.log(navLinks); // Check if navLinks is selected

    menuIcon.onclick = () => {
        navLinks.classList.toggle('active');
        console.log(navLinks.classList); // Log the class list to see changes
    };
});