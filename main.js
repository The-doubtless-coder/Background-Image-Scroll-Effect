const bg_imageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

const updateImage = () => {
  bg_imageEl.style.opacity = 1 - window.pageYOffset / 800;
  bg_imageEl.style.backgroundSize = 160 - window.pageYOffset / 10 + "%";
  console.log(window.pageXOffset);
  console.log(window.pageYOffset);
  console.log(1 - window.pageYOffset / 850);
};
