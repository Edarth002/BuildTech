let menu = document.getElementById("Menu");
let closeMenu = document.getElementById("closeMenu");
let openMenu = document.getElementById("openMenu");

openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
});
closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
});

let animate = document.querySelectorAll(".section");
animate.forEach((el) => observer.observe(el));
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

