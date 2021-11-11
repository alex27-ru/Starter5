// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
//import '~/app/libs/page-scroll-to-id/jquery.malihu.PageScroll2id.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

$('#warranty1-click').magnificPopup({
		items: {
      src: '#warranty1',
      type: 'inline'
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$('#warranty2-click').magnificPopup({
		items: {
      src: '#warranty2',
      type: 'inline'
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$('#warranty3-click').magnificPopup({
		items: {
      src: '#warranty3',
      type: 'inline'
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$('.questions__item-btn').on('click', function () {
		$('.questions__answer-box').removeClass('questions__answer-box--active');
		$(this).parent().find('.questions__answer-box').addClass('questions__answer-box--active');
	});
	$('.mfp-close').on('click', function () {
		$('.questions__answer-box').removeClass('questions__answer-box--active');
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.questions__item'); // класс элемента с кликом
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.questions__answer-box').removeClass('questions__answer-box--active'); // удаляем класс активности
		}
	});


	
	$('.questions__more').on('click', function () {
		$('.questions__item').addClass('questions--visible');
	});





})
