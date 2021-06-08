$(document).ready(function () {
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
}
);