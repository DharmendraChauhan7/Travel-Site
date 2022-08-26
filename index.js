// Toggle The Navbar While In Phone Screen
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Fix Position of Navbar
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 200) {
    navigation.classList.add("fix");
    header.style.zIndex = "1000";
  } else {
    navigation.classList.remove("fix");
  }
});

// To Control The Video Of Web-Page
const video = document.querySelector(".video");
const button = document.querySelector(".video-control");

button.addEventListener("click", playpausevideo);

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause' ></i>";
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play' ></i>";
    video.pause();
  }
}

// Dynamic Effect While scrolling
const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true
});

scroll.reveal(`.content h1, .content .btn`, {
  origin: "top",
  interval: 100
});

scroll.reveal(`.about .col h1, .about .col p, .about .col .btn`, {
  origin: "left",
  interval: 150
});

scroll.reveal(
  `.about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form`,
  {
    origin: "right"
  }
);

scroll.reveal(`.service img,.contact .title`, {
  origin: "left"
});

scroll.reveal(`.service .col,.trip .row`, {
  origin: "left"
});

scroll.reveal(
  `.trip .title,.more .col:first-child,.newsletter .colz ,.explore`,
  {
    origin: "right"
  }
);

scroll.reveal(`.footer .row .col`, {
  origin: "top"
});

// Sliders

// Banner Slider 1
const swiper1 = new Swiper(".slider-1", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  }
});

// Trips Slider 2
const swiper3 = new Swiper(".slider-3", {
  autoHeight: true,
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev"
  },
  pagination: {
    el: ".custom-pagination"
  }
});
