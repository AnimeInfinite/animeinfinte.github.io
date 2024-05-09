alert("Welcome to AnimeInfinity");
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classlist.toggle("fa-time");
    navbar.classList.toggle("active");
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change slides every 2 seconds
}
var swiper = new Swiper(".anime-slider",{
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay:7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
document.querySelector("#navbarNavDropdown > input")
document.querySelector("#navbarNavDropdown > input")
document.querySelector("#navbarNavDropdown > input")
