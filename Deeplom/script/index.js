const burgerMenu = document.querySelector(".header__container");burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("open");
});

const burgerButton = document.querySelector(".burger-menu-button");
burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("open");
});

function openTab(tabName) {
    var i, tabs;
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
}

let swiper = new Swiper(".car-swiper", {
    direction: "horizontal",
    slidesperview: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
