(function($) {

	"use strict"; 
   $(window).load(function() {
    	$("#loader").fadeOut("slow", function(){
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})
   let toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});
})(jQuery);