const slidesContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-prev");
const nextButton = document.getElementById("slide-next");

nextButton.addEventListener("click", () => {
  console.log("Click");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
