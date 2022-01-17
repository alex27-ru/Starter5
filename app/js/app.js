// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/app/libs/slick-carousel/slick/slick.min.js'
import '~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
import '~/app/libs/slicknav/dist/jquery.slicknav.min.js'

/* устанавливать jQuery (с записью в package.json) если не сработало подключение библиотеки - npm install jquery --save */
document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

$('.feedback__slider').slick({
	infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>',
	responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
				autoplay: true,
  			autoplaySpeed: 3000,
				slidesToScroll: 1
      }
    },
		{
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 2
      }
    },
		{
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
				slidesToScroll: 1
      }
    }

  ]

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
	mainClass: 'Class-video',
	iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<h2 class="video__title">Козни недобросоветсного риелтора</h2>'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allow="autoplay" allowfullscreen></iframe>'+
						'<div class="video__bottom-inner"><img class="feedback__img-bottom" src="images/dist/family-standard-1.jpg" alt=""> <span class="feedback__text-bottom">Карта клиента - Family</span></div>' +
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

$('.services__item-link').magnificPopup({
  type:'inline',
  midClick: true
});

$('.call-back, .first-screen__btn').magnificPopup({
  items: {
      src: '#call-back-popup',
      type: 'inline'
  }
});

$('.tab-card__consultation-btn, .benefits__numbers-btn').magnificPopup({
  items: {
      src: '#call-back-popup2',
      type: 'inline'
  }
});

$('.partners__slider').slick({
	infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>',
	responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
				autoplay: true,
  			autoplaySpeed: 3000
      }
    },
		{
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
  			autoplaySpeed: 3000
      }
    },
		{
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: true,
  			autoplaySpeed: 3000
      }
    },
		{
      breakpoint: 465,
      settings: {
        slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
  			autoplaySpeed: 3000
      }
    }

  ]

  });

	$(function(){
        $('.nav').slicknav({
					label: '',
					closeOnClick: true,
					prependTo: '.header-top__inner'
				});
				
    });

$('.tariff__tab-inner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>',

	responsive: [
		
    {
      breakpoint: 960,
      settings: {
        arrows: true,
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 2,
				slidesToScroll: 1
      }
    },
    {
      breakpoint: 670,
      settings: {
        arrows: true,
				autoplay: true,
				slidesToShow: 1,
				slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: true,
				autoplay: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false
      }
    }

  ]

  });


})
