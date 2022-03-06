// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

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

