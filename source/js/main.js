window.addEventListener('scroll', function() {
    let menu1 = document.getElementById('menu1');
    let menu2 = document.getElementById('menu2');
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > menu1.offsetHeight) {
        menu1.style.top = "-60px"; // Correspondente à altura do #menu1
        menu2.style.top = "0";
    } else {
        menu1.style.top = "0";
        menu2.style.top = "60px"; // Correspondente à altura do #menu1
    }   
});

// Dentro do seu arquivo JavaScript ou script no HTML$(document).ready(function(){
    // Importe o Swiper (verifique se você incluiu o arquivo JS do Swiper antes)

    // document.addEventListener('DOMContentLoaded', function() {
    //     var swiper = new Swiper('.swiper-container', {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //       loop: true,
    //       autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //       },
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //       },
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
    //     });
    //   });
      

    // document.addEventListener('DOMContentLoaded', function() {
    //     var swiper = new Swiper('.swiper-container', {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //       loop: true,
    //       autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //       },
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
    //       renderBullet: function(index, className) {
    //         return '<span class="' + className + '"></span>';
    //       },
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         bulletClass: 'swiper-pagination-bullet',
    //         bulletActiveClass: 'swiper-pagination-bullet-active',
    //       },
    //     });
    //   });
    document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          renderBullet: function(index, className) {
            return '<span class="' + className + '"></span>';
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          },
          on: {
            init: function() {
              customizeSwiperNavigation(this); // Chama a função para personalizar a navegação
            },
          },
        });
      
        function customizeSwiperNavigation(swiper) {
          var prevArrow = document.querySelector('.swiper-button-prev');
          var nextArrow = document.querySelector('.swiper-button-next');
      
          prevArrow.style.background = 'none'; // Remove o background da seta anterior
          nextArrow.style.background = 'none'; // Remove o background da seta seguinte
      
          prevArrow.style.color = '#588b72'; // Altere a cor conforme necessário
          nextArrow.style.color = '#588b72'; // Altere a cor conforme necessário
        }
      });
      