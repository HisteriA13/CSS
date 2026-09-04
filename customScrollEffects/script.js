// background
const bgImg = document.querySelector(".bg-img");

window.addEventListener("scroll", () => {
  handleImage();
});

function handleImage() {
  bgImg.style.opacity = 1 - window.pageYOffset / 900; // number 900 handles whiteness
  bgImg.style.backgroundSize = 100 + window.pageYOffset / 15 + "%"; // number 15 handles zooming
}
