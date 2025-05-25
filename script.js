let menuList = document.getElementById("menu");
let menuBtn = document.querySelector(".menuBtn");
let closeBtn = document.querySelector(".closeBtn");

function openMenu() {
    menuList.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";

}
function closeMenu() {
    menuList.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";

}

let btns = menuList.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

