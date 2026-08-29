const btnEl = document.getElementById("btn");
const audioEl = document.getElementById("audio");

btnEl.addEventListener("click", () => {
  document.body.classList.toggle("on");
  audioEl.play();
  audioEl.currentTime = 0;
});
