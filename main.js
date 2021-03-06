const secondPart = document
  .querySelector(".second-part")
  .getBoundingClientRect();
const scrollButton = document.querySelector(".button");
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: secondPart.top,
    behavior: "smooth",
  });
});

const p1 = document.getElementById("no1");
p1.addEventListener("click", () => {
  window.open("https://pozsegam.github.io/Shoot-em-up/", "_blank");
});

const p2 = document.getElementById("no2");
p2.addEventListener("click", () => {
  window.open("https://pozsegam.github.io/reactMovie/", "_blank");
});

const p3 = document.getElementById("no3");
p3.addEventListener("click", () => {
  window.open("https://pozsegam.github.io/Etch-a-Sketch/", "_blank");
});

const cvLink = document.querySelector(".cv");
cvLink.addEventListener("click", () => {
  window.open("./assets/CV.PDF", "_blank");
});

const githubLink = document.querySelector(".github");
githubLink.addEventListener("click", () => {
  window.open("https://github.com/pozsegam", "_blank");
});
