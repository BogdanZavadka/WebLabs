const OPEN_CLASS = "open";

const navLinks = document.getElementById("nav-links");

function toggleMenu() {
    if (navLinks.classList.contains(OPEN_CLASS)) {
        navLinks.classList.remove(OPEN_CLASS);
    }
    else {
        navLinks.classList.add(OPEN_CLASS);
    }
}