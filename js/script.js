$(function () {
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

	// ナビゲーションのリンクをクリックしたらナビゲーションを隠す
	$(".js-globalNav__item > a").click(function () {
		$("body").removeClass("is-navActive");
		$(".js-hamburgerButton").attr("aria-expanded", false);
	});

	// mv__listをslick化
	$('.js-mv__list').slick({
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
		dots: true,
		dotsClass: 'mv__dots'
	});

	var mediaQuery = matchMedia('(max-width: 959px)');
	// ページが読み込まれた時に実行
	handle(mediaQuery);
	// ウィンドウサイズが変更されても実行されるように
	mediaQuery.addListener(handle);

	function handle(mq) {
		if (mq.matches) {
			// ウィンドウサイズが959px以下のとき
			$('.js-footer-nav-parent').click(function () {
				$('.js-footer-nav__childList').slideToggle();
				$('body').toggleClass('footer-nav-active');
			});
		}
	}
});
