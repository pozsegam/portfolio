const scrollButton = document.querySelector(".button");
const pageHeight = window.innerHeight;

scrollButton.addEventListener("click", () => {
  window.scrollBy({
    top: pageHeight,
    behavior: "smooth",
  });
});

const p1 = document.getElementById('no1');
p1.addEventListener("click", () => {
  window.open("https://pozsegam.github.io/ToDo/", "_blank");
});

const p2 = document.getElementById('no2')
p2.addEventListener("click", () => {
  window.open("https://pozsegam.github.io/reactMovie/", "_blank");
});

const p3 = document.getElementById('no3');
p3.addEventListener("click", () => {
  window.open("https://pozsegam.github.io/Etch-a-Sketch/", "_blank");
});

const cvLink = document.querySelector(".cv");
cvLink.addEventListener("click", () => {
  window.open("CV.pdf", "_blank");
});

const githubLink = document.querySelector(".github");
githubLink.addEventListener("click", () => {
  window.open("https://github.com/pozsegam", "_blank");
});
