"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Stäng meny" : "Öppna meny");
});

navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Öppna meny");
    }
});
