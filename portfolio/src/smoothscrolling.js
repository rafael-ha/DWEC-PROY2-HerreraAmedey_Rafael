import $ from 'jquery';

export const smoothscroll = () => {
    $('.smoothscroll').on('click', function (e) {
	 	
        e.preventDefault();

      var target = this.hash,
       $target = $(target);

       $('html, body').stop().animate({
          'scrollTop': $target.offset().top
     }, 800, 'swing', function () {
         window.location.hash = target;
     });

     });
}