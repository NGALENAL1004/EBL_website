/*Header script*/
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
})

/*Banner transition script*/
document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.banner .content');
  content.classList.add('show');
});

/*Presentation transition script*/
$(document).ready(function () {
  var row = $('.presentation .row');
  var offset = row.offset().top;
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > offset - (0.8 * windowHeight)) {
      row.addClass('show');
    }
  });
});

/*Ambition transition script*/
$(document).ready(function () {
  var row = $('.ambition .row .images');
  var offset = row.offset().top;
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > offset - (0.8 * windowHeight)) {
      row.addClass('show');
    }
  });
});

/*Management transition script*/
$(document).ready(function () {
  var image = $('.management .area .image');
  var offset = image.offset().top;
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > offset - (0.8 * windowHeight)) {
      image.addClass('show');
    }
  });
});

/*Values transition script*/
$(document).ready(function () {
  var row = $('.values .box-container');
  var offset = row.offset().top;
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > offset - (0.8 * windowHeight)) {
      row.addClass('show');
    }
  });
});

/*Servicepage transition script*/
$(document).ready(function () {
  var contents = $('.servicepage .row .content');
  var offset = $(window).height() * 0.2;

  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    contents.each(function () {
      if ($(this).offset().top < scroll - offset) {
        $(this).addClass('show');
      }
    });
  });
});

/*Consumer script*/
$(document).ready(function () {
  $(".consumer-container").owlCarousel({
    loop: true,
    margin: 5,

    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      250: {
        items: 2
      },
      500: {
        items: 3
      },
      700: {
        items: 4
      },
      1000: {
        items: 6
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
    const speed = 500; 
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

 /*Popup script*/
 document.querySelectorAll('.container img').forEach(image => {
  image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src')
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
}

/*Popup script*/
document.querySelectorAll('.row .image img').forEach(image => {
  image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src')
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
}


