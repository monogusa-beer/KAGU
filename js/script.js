$(function () {
	//  object-fit-imagesを呼び出し
	objectFitImages();

	// mv__listをslick化
	$('.js-mv__list').slick({
		adaptiveHeight: true,
		autoplay: true,
		dots: true,
		dotsClass: 'mv__dots'
	});


});
