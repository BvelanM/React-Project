const Slides = () =>{
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length - 1; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 2500);
}
}

export default Slides;
