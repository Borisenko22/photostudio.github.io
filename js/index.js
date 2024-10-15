const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const socials = document.querySelector(".social-media");


burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  socials.classList.toggle("active");
});


const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;

        header.classList.toggle('active');

        if (header.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
});

