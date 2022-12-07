let hamburgerCon = document.querySelector(".hamburger-container")
let mobileNav = document.querySelector(".mobile-nav")

function changeshow(){
    hamburgerCon.classList.toggle("showburger")
    mobileNav.classList.toggle("showmobilenav")
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 0}
          },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  