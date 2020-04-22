$(function () {
	//  object-fit-imagesを呼び出し
	objectFitImages();

	// ハンバーガーメニュー
	$(function () {
		$('.js-hamburgerButton').click(function () {
			$('body').toggleClass('is-navActive');

			if ($(this).attr('aria-expanded') == 'false') {
				$(this).attr('aria-expanded', true);
			} else {
				$(this).attr('aria-expanded', false);
			}
		});
	});

	// mv__listをslick化
	$('.js-mv__list').slick({
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
		dots: true,
		dotsClass: 'mv__dots'
	});


});
