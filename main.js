// select element function

const selectElement = (element) => {
  return document.querySelector(element);
};

// selected elements

const menuToggler = selectElement(".menu-toggle");
const body = selectElement("body");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});
