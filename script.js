/*Header script*/
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})


/*Home script*/
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].classList.add('active');
}

function showSlide(n) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.querySelector('.slide-content').classList.remove('animate-up');
    });
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].classList.add('active');
    slides[slideIndex].querySelector('.slide-content').classList.add('animate-up');
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    showSlide(--slideIndex);
}

showSlide(slideIndex);

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide, 8000);


/*About script*/
window.addEventListener("scroll", function () {
    const aboutSection = document.querySelector("#about");
    const content = document.querySelector(".about .row .content");

    if (isElementHalfVisible(aboutSection)) {
        content.classList.add("animate");
    }
});

function isElementHalfVisible(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var elementHeight = el.offsetHeight;

    return rect.top + elementHeight / 2 <= windowHeight && rect.bottom >= elementHeight / 2;
}




/*Consumer script*/
$(document).ready(function(){
    $(".consumer-container").owlCarousel({
        loop:true,
        margin:5,
       
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2 // Nombre de logos visibles à la fois pour les petites tailles d'écran
            },
            600:{
                items:4 // Nombre de logos visibles à la fois pour les écrans de taille moyenne
            },
            1000:{
                items:6 // Nombre de logos visibles à la fois pour les grands écrans
            }
        }
    });
});



/*Counter script*/
const options = {
    threshold: 0.5,
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
        startCounting(entry.target);
      }
    });
  }, options);
  
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach((counter) => {
    observer.observe(counter);
  });
  
  function startCounting(counter) {
    const target = +counter.getAttribute('data-target');
    let count = 0;
  
    const updateCount = () => {
      const speed = 500; // Vitesse de l'animation (en millisecondes)
      const inc = target / speed;
  
      if (count < target) {
        count = Math.ceil(count + inc);
        counter.innerText = count;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
  
    updateCount();
  }
  


