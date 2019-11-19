$(function() {
  // Start Popup My bookings

  $(".booking-box").click(function() {
    $(".booking-popup")
      .fadeIn()
      .css("display", "flex");
  });

  $(".booking-popup").click(function() {
    $(this).fadeOut();
  });

  $(".booking-popup .popup-box").click(function(e) {
    e.stopPropagation();
  });

  $(".booking-popup .close").click(function(e) {
    e.preventDefault();
    $(".booking-popup").fadeOut();
  });

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      $(".booking-popup").fadeOut();
    }
  });

  // End Popup My bookings
});
