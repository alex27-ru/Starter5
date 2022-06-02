// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/app/libs/mixitup/dist/jquery.mixitup.min.js'

import { Swiper, Scrollbar, Mousewheel, 
Autoplay } from 'swiper'

Swiper.use([ Scrollbar, Mousewheel, 
Autoplay ])

/* устанавливать jQuery (с записью в package.json) если не сработало подключение библиотеки - npm install jquery --save */
document.addEventListener("DOMContentLoaded", () => {
	$(".burger,.header__burger").click(function (event) {
		$(".burger,.header__burger").toggleClass("active");
		$("body").toggleClass("lock");
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$("header,.header,.logo__img").addClass("sticky");
		} else {
			$("header,.header,.logo__img").removeClass("sticky");
		}
	});
//изменение хедера при скролле



calc();
$(".calc__input-radio").on("change", calc);
$(".calc__backage-btn").on("click", function(){
	event.preventDefault()
	$(".calc__backage-btn").removeClass("active");
	$(this).addClass("active");
	calc();
});

$(".portfolio__fliter-btn").on("click", function(){
	// event.preventDefault()
	$(".portfolio__fliter-btn").removeClass("portfolio__fliter-btn_active");
	$(this).addClass("portfolio__fliter-btn_active");
});


$(".portfolio__list").mixItUp();


const swiperIMG = new Swiper(".clients__slider", {
	loop: false,
	speed: 240,
	// spaceBetween: 30,
	slidesPerView: 7,
	autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
	scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
					draggable: true,
        },
	mousewheel: {
    			invert: false,
  },
	breakpoints: {
					320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
					480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
        },
});

//карта яндекс
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [43.23814913338616,76.9457429058776],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });
				myMap.behaviors.disable([
					"scrollZoom",
					"drag"
				]);
				myMap.controls.remove("searchControl");
				myMap.controls.remove("fullscreenControl");
				myMap.controls.remove("typeSelector");
				myMap.controls.remove("trafficControl");

				var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [43.23814913338616,76.9457429058776], // координаты точки
				preset: "islands#blueCircleDotIconWithCaption"
    }
		},
		{
			preset: "islands#blueCircleDotIconWithCaption"
		}
		);
	myMap.geoObjects.add(myGeoObject);
	
  }

});

function calc() {
	var val = $(".calc__input-radio:checked").attr("value");//атрибут radio
	var pacN = $(".calc__backage-btn.active").attr("value");//атрибут кнопки пакета

	var valnum = parseInt(val); //преобразование текста в число
	var result = val.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "); //разделение разрядности пробелом

	 $("#all-square").html(result+" м<sup>2</sup>");//вставка результата расчета на страницу

	 var priceSq = valnum*48.5*pacN; //расчет средней стоимости
	 var pricetxt = priceSq.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");//разделение разрядности пробелом
	$("#priceSq").html(pricetxt+" тг.");//вставка результата расчета на страницу

	var average = valnum*485*pacN;//расчет общей стоимости
	 var averagetxt = average.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");//разделение разрядности пробелом
	$("#average-price").html(averagetxt+" тг.");//вставка результата расчета на страницу



	
	
};


