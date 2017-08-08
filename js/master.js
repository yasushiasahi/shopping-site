
$(function() {

  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    autoplay: true,
  });

  $(".toggle_button").click(function() {
    console.log("hit!")
    $(this).next().slideToggle();
    return false;
  });
});
