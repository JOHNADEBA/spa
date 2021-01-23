const bar = document.querySelector('.bar')
const menu = document.querySelector('.down-mid')
const links = document.querySelectorAll('.link')


bar.addEventListener('click', ()=>{
  // menu.classList.toggle('down-mid-active');
  // menu.style.transform = 'translateX(0%)'
  // console.log('i')

menu.style.transform === 'translateX(0%)' ?
menu.style.transform = 'translateX(100%)' 
: menu.style.transform = 'translateX(0%)' 



  links.forEach((link, i) =>{
    link.style.animation ? link.style.animation ='' 
    : link.style.animation = `liFade 0.5s ease forwards ${i / 7 + 0.5}s`
  });
  bar.classList.toggle('toggle')

});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}