$(document).ready(function() {
  $('.logo-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});
$('.multiple-image').slick({
  slidesToShow: 1.4,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  
});
  $('.slider').slick({
  dots: true,
  vertical: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  verticalSwiping: true,
  
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
  ]
});

  $('.post-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.fa-search').on('click', function(){
    $('.app-sidebar.sidebar-right').addClass('show');
  });

  $('.fa-times').on('click', function(){
    $('.app-sidebar.sidebar-right').removeClass('show');
  });
  
  $('.fa-shopping-bag').on('click', function(){
    $('#app_cart_sidebar').addClass('show');
  });

  $('.fa-times').on('click', function(){
    $('#app_cart_sidebar').removeClass('show');
  });

  $('.fa-bars').on('click', function(){
    $('#app_menu_sidebar').addClass('show');
  });

  $('.fa-times').on('click', function(){
    $('#app_menu_sidebar').removeClass('show');
  });


  
  $('#sign-in').hide();
  $('.modal-backdrop').hide();
  $('.fa-sign-in').on('click', function(){
    $('#sign-in').show();
    $('.modal-backdrop').show();
  
  });
  $('.fa-times').on('click', function(e){
  $('.modal').hide();
    $('.modal-backdrop').hide();
  });
  
  $('.slick-next').html('<i class="fal fa-angle-down"></i>')
  $('.slick-prev').html('<i class="fal fa-angle-up"></i>')

 $('.product-size-item').on('click', function(){
   $('.product-size-item').removeClass('active');
   $(this).addClass('active');
 })
});

jQuery(document).ready(function($){
  $( ".pointer1" ).click(function(e) {
      e.preventDefault();
          $(".size-info").not(".size1").slideUp();
          $( ".size1" ).slideToggle( "product-size-item", function() {
    });
   });
   
  $( ".pointer2" ).click(function(e) {
      e.preventDefault();
          $(".size-info").not(".size2").slideUp();
          $( ".size2" ).slideToggle( "product-size-item", function() {
    });
  });
  
  $( ".pointer3" ).click(function(e) {
      e.preventDefault();
          $(".size-info").not(".size3").slideUp();
          $( ".size3" ).slideToggle( "product-size-item", function() {
    });
   });

  $( ".pointer4" ).click(function(e) {
      e.preventDefault();
          $(".size-info").not(".size4").slideUp();
          $( ".size4" ).slideToggle( "product-size-item", function() {
    });
  });
  
  $("#select").click(function(e){
    e.preventDefault();
    $(".product-sizes-wrapper").addClass('product-sizes-fixed');
    $(".product-sizes-close").show();
    
  });
  $(".product-sizes-close").click(function(e){
    e.preventDefault();
    $(".product-sizes-wrapper").removeClass('product-sizes-fixed');
    $(".product-sizes-close").hide();
  });
});

