const toogleMenu = () => {
  const $nav = document.getElementById("navbar");
  $nav.classList.toggle("active-menu-mobile");
};

const $btnMobile = document.getElementById("btnOpenMenu");
$btnMobile.addEventListener("click", toogleMenu);

//

const $btnOpenVideoModal = document.getElementById("btn-video-play");

$btnOpenVideoModal.addEventListener("click", () => {
  const $VideoModal = new bootstrap.Modal(
    document.getElementById("video-modal")
  );
  $VideoModal.show();
});

// menu slider
$menuSlider = document.getElementById("menu-slider");
$aSelectSlider = document.querySelectorAll("#menu-slider > li > a");

listA = [...$aSelectSlider];

$menuSlider.addEventListener("click", (e) => {
  if (e.target.href) {
    console.log(e.target.href.split("#")[1]);
    e.preventDefault();

    listA.map((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
    const Slide = document.getElementById(e.target.href.split("#")[1]);
    Slide.classList.add("opacity");
    // style.opacity = 1;
    console.log(Slide);
  }
});
