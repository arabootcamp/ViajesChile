$(document).ready(function () {

     // Añade smooth scrolling a a los link del navbar
     $(".smooth-scroll").on("click", function (event) {
          event.preventDefault();
          let hash = this.hash;
          console.log(hash);
          $("html, body").animate({
               scrollTop: $(hash).offset().top - 37,
          }, 800);
     });

     //Evento para hacer aparecer el bg-color del navbar cyan 
     $(document).on("scroll", function () {

          let widthDevice = $(window).width();

          if (widthDevice < 520)
               widthDevice *= 0.35;
          else if (widthDevice < 992)
               widthDevice *= 0.42;
          else
               widthDevice *= 0.44;

          let currentOffset = $(document).scrollTop();
          if (currentOffset > widthDevice)
               $('nav').addClass('my-bg-nav');
          else
               $('nav').removeClass('my-bg-nav');
     });

     //Jquery para que funcione el tooltip
     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
     })
});