const swiper = new Swiper('.swiper-container', {
    // Optional parameters цикличность
    loop: true,
  
    // If we need pagination настройка пагинации
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      autoHeight: true,
    },
  
    // Navigation arrows навигация
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      // длительность покаща слайда
      delay: 6000,
      // закончить на последнем слайде (цикличность)
      stopOnLastSlide: false,
      // отключение после ручного переключения
      disableOneInteraction: false,
  },
  speed: 800,

  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
      document.querySelector("header").classList.toggle("open")
    })
  });