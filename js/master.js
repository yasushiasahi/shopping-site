
$(function() {
  $(".toggle_button").click(function() {
    console.log("hit!")
    $(this).next().slideToggle();
  });
});
