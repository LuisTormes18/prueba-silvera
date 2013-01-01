
//  sticky
const $header = document.querySelector(".hero_header");

window.onscroll = () => {
    let ScrollPosition = window.pageYOffset;

    if (ScrollPosition > 50) {
        $header.classList.add("sticky");
    } else {
        $header.classList.remove("sticky");
    }
};

//open menu
const toggleMenu = () => {
  const $nav = document.getElementById("navbar");
  $nav.classList.toggle("active-menu-mobile");
};

const $btnMobile = document.getElementById("btnOpenMenu");
$btnMobile.addEventListener("click",toggleMenu);

const $btnOpenVideoModal = document.getElementById("btn-video-play");

$btnOpenVideoModal.addEventListener("click", () => {
  const $VideoModal = new bootstrap.Modal(
    document.getElementById("video-modal")
  );
  $VideoModal.show();
});

// Slider
$Sliders = document.querySelectorAll("#slider > li");

// menu slider
$menuSlider = document.getElementById("menu-slider");
$aSelectSlider = document.querySelectorAll("#menu-slider > li > a");

listA = [...$aSelectSlider];
SliderLi = [...$Sliders];

$menuSlider.addEventListener("click", (e) => {
  if (e.target.href) {
    e.preventDefault();
    listA.map((a) => {
      a.classList.remove("active");
    });
    SliderLi.map((li) => {
      li.classList.remove("opacity");
    });
    e.target.classList.add("active");
    document
      .getElementById(e.target.href.split("#")[1])
      .classList.add("opacity");
  }
});
