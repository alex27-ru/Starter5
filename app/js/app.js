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
});