const openMenu = document.querySelector(".fa-bars")
const Menu = document.querySelector(".nav_bar-mobile")

openMenu.onclick = function() {
    Menu.classList.toggle("open")
}

Menu.onclick = function() {
    Menu.classList.remove("open")
}