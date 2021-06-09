$(document).ready(function () {

     // Añade smooth scrolling a todos los links
     $("a").on('click', function (event) {
          if (this.hash !== "") {
               event.preventDefault();
               var hash = this.hash;
               $('html, body').animate({
                    scrollTop: $(hash).offset().top
               }, 800, function () {
                    window.location.hash = hash;
               });
          } // End if
     });

     //Evento para hacer aparecer el bg-color cyan del navbar
     $(document).on("scroll", function () {
          let altoImagenHeaader = $(window).width() * 0.46;
          let desplazamientoActual = $(document).scrollTop();
          if (desplazamientoActual > altoImagenHeaader)
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