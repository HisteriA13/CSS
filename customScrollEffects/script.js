// background
const bgImg = document.querySelector(".bg-img");
const arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  handleBackground();
  handleArrow();
});

function handleBackground() {
  bgImg.style.opacity = 1 - window.pageYOffset / 900; // number 900 handles whiteness
  bgImg.style.backgroundSize = 100 + window.pageYOffset / 15 + "%"; // number 15 handles zooming
}

function handleArrow() {
  if (window.scrollY < 5) {
    arrow.classList.add("fade-in");
    arrow.classList.remove("fade-out");
  } else {
    arrow.classList.remove("fade-in");
    arrow.classList.add("fade-out");
  }
}
