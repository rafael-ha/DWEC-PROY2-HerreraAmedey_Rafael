import $ from 'jquery';
export const volverArriba = () =>{
    const pxShow = 300;
    const fadeInTime = 400;
    const fadeOutTime = 400;

    $(window).scroll(function () {
        if (!$("#header-search").hasClass("is-visible")) {
            if ($(window).scrollTop() >= pxShow) {
                $("#go-top").fadeIn(fadeInTime);
            } else {
                $("#go-top").fadeOut(fadeOutTime);
            }
        }
    });
}