let current = 1;

const slideshow = () => {
  const slides = Array.from(document.querySelectorAll(".slide"));

  console.log(slides);

  if (current > slides.length) {
    current = 1;
  } else if (current === 0) {
    current = slides.length;
  }

  slides.forEach((slide) => {
    if (slide.classList[1].split("-")[1] * 1 === current) {
      slide.style.cssText = "visibility:visible; opacity:1;";
    } else {
      slide.style.cssText = "visibility:hidden; opacity:0;";
    }
  });

  current++;
};

slideshow();

setInterval(() => {
  slideshow();
}, 10000);

//
//
//making side bar operations
const sidebarButton = document.querySelector(".sidebar-button");
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");
const closeButton = document.querySelector(".sidebar i");

menuIcon.addEventListener("click", () => {
  sidebar.classList.add("navigate");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("navigate");
});

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("toggle");
});
