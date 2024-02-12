$(document).ready(function(){

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            100:{
            slidesPerView: 1,
            spaceBetween: 20,
            },
            360: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            400: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            700: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            840: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 20, 
            },

            1232: {
            slidesPerView: 4,
            spaceBetween: 20,
            },
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      
})