// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/app/libs/slick-carousel/slick/slick.min.js'
import '~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'

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


	$('.feedback__btn').on('click', function() {
		$('.feedback__btn').removeClass('active');
    var filterClass = $(this).data('filter');
		if(filterClass=='mix'){
        $('.feedback__slider').slick('slickUnfilter');
    } else {
        $('.feedback__slider').slick('slickUnfilter').slick('slickFilter','.'+filterClass);
    }
    $(this).addClass('active');
    filtered = true; 
 
  });






})
