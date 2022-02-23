(function ($) {
  "use strict";
  $(window).load(function () {
    $("#loader").fadeOut("slow", function () {
      $("#preloader").delay(300).fadeOut("fast");
    });
  });

  let pxShow = 300;
  let fadeInTime = 400;
  let fadeOutTime = 400;
  let scrollSpeed = 300;

  jQuery(window).scroll(function () {
    if (!$("#header-search").hasClass("is-visible")) {
      if (jQuery(window).scrollTop() >= pxShow) {
        jQuery("#go-top").fadeIn(fadeInTime);
      } else {
        jQuery("#go-top").fadeOut(fadeOutTime);
      }
    }
  });
})(jQuery);
