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

$('.feedback__slider').magnificPopup({
	delegate: '.feedback__slider-link',
	type: 'iframe',
	iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allow="autoplay" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/',
      id: 'v=',
      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
    }

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
});

$('.partners__slider').slick({
	infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>'

  });


})
