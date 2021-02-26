const burger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const bodywrapper = document.querySelector(".body-wrapper");
burger.addEventListener("click", () => {
  if (navlinks.style.display == "flex") {
    navlinks.style.display = "none";
    bodywrapper.style.backgroundImage = "none";
  } else {
    navlinks.style.display = "flex";
    bodywrapper.style.backgroundImage =
      "linear-gradient(-22deg,hsl(227, 12%, 61%),white)";
    bodywrapper.style.backgroundRepeat = "no-repeat";
    bodywrapper.style.backgroundPosition = "top right";
    bodywrapper.style.backgroundSize = "100vw 100vh";
  }
});
