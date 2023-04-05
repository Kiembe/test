const openMenu = document.querySelector(".fa-bars")
const Menu = document.querySelector(".nav_bar-mobile")

openMenu.onclick = function() {
    Menu.classList.toggle("open")
}

Menu.onclick = function() {
    Menu.classList.remove("open")
}

window.addEventListener("scroll", reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveral');

        for(var i = 0 ; i < reveals.length ; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealTop < windowHeight - revealpoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }