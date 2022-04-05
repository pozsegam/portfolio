const scrollButton = document.querySelector(".button");
const pageHeight = window.innerHeight;

scrollButton.addEventListener("click", () => {
  window.scrollBy({
    top: pageHeight,
    behavior: "smooth",
  });
});

const p1 = document.querySelector(".project1");
p1.addEventListener("click", () => {
  window.open("https://pozsegam.github.io/ToDo/", "_blank");
});

const p2 = document.querySelector(".project2");
p2.addEventListener("click", () => {
  window.open("https://pozsegammovies.netlify.app", "_blank");
});

const p3 = document.querySelector(".project3");
p3.addEventListener("click", () => {
  window.open(
    "https://htmlpreview.github.io/?https://github.com/pozsegam/Etch-a-Sketch/blob/main/index.html",
    "_blank"
  );
});