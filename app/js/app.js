// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/app/libs/slick-carousel/slick/slick.min.js'
import '~/app/libs/mixitup/build/jquery.mixitup.min.js'

/* устанавливать jQuery (с записью в package.json) если не сработало подключение библиотеки - npm install jquery --save */
document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

$('.feedback__slider').slick({
	infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>'

  });



/* подключение фильтра mixItUp в сладере */
$('#feedback__slider').mixItUp();

//$('.filter').attr("display","block");


})
