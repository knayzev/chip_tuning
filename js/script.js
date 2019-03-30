// Кнопка поиска

$(document).ready(function() {
  console.log('123');

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

  $('.smoothScroll').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);

   $('html, body').stop().animate({
     'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
     window.location.hash = target;
    });
  });


  //owl-carousel initiazilation
  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      320: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })



});