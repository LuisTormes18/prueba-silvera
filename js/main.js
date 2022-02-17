const toogleMenu = () => {
    const $nav = document.getElementById("navbar");
    $nav.classList.toggle("active-menu-mobile");
};

const $btnMobile = document.getElementById("btnOpenMenu");
$btnMobile.addEventListener("click", toogleMenu);

