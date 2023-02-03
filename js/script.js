function flexMenu(element) {
	if ($(window).width() > 991) {
		if ($('.js-menu-flex__list li').length) {
			element.append($('.js-menu-flex__list').html())
			$('.js-menu-flex__popup').remove();
			element.css('padding-right', '0')
		}
		let elementWidth = element.width();
		elementWidth = Math.round(elementWidth);
		let widthSum;
		let c = 0;
		do {
			c++
			widthSum = 0;
			element.find('> li').each(function (index, value) {
				let itemWidth = $(this).outerWidth();
				widthSum += itemWidth;
			});
			widthSum = Math.round(widthSum);
			if (elementWidth !== widthSum) {
				let item = element.find('> li:last');
				if (!$('.js-menu-flex__popup').length) {
					element.append(`<div class="js-menu-flex__popup menu__popup"><div class="js-menu-flex__btn menu__more"><ul class="js-menu-flex__list menu__items"></ul></div>`)
					element.css('padding-right', '50px')
					elementWidth = Math.round(element.width());
				}
				element.find('.js-menu-flex__list').prepend(item.prop('outerHTML'));
				item.remove();
			}
		} while (elementWidth !== widthSum && c < 50);
	}
}
$(window).resize(function () {
	let time;
	clearTimeout(time);
	time = setTimeout(function () {
		flexMenu($('.js-menu-flex'));
	}, 200)
});

$(document).ready(function () {

	flexMenu($('.js-menu-flex'));

	// if ($(window).width() > 992) {
	// 	setTimeout(function () {
	// 		$('.js-menu-flex').flexMenu(); 
	// 	}, 200);
	// } else {
	// 	setTimeout(function () {
	// 		$('.js-menu-flex').flexMenu({
	// 			'undo': true
	// 		});
	// 	}, 200);
	// }


	let sliderHome = new Swiper(".home-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,

		pagination: {
			el: ".home-slider__pagination",
			clickable: true
		},
	});

	let sliderManufacturers = new Swiper(".slider-manufacturers.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		navigation: {
			nextEl: ".block-slider__next",
			prevEl: ".block-slider__prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1920: {
				slidesPerView: 6,
				spaceBetween: 24,
			},
		}
	});


	let sliderCategoriesHome = new Swiper(".home-categories-slider.swiper-container", {
		slidesPerView: "auto",
		spaceBetween: 0,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		speed: 500,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".home-categories-slider__pagination",
			clickable: true
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1700: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		}
	});

})


$(document).on('click', '.js-menu-sidebar__btn', function () {
	let parent = $(this).parents('.js-menu-sidebar')[0];
	if (!$(this).hasClass('active')) {
		$(this).addClass('active');
		$(parent).addClass('active').find('>.js-menu-sidebar__body').slideDown(300);
	} else {
		$(this).removeClass('active');
		$(parent).removeClass('active').find('.js-menu-sidebar__body').slideUp(300);
		$(parent).removeClass('active').find('.js-menu-sidebar__btn').removeClass('active');
		$(parent).removeClass('active').find('.js-menu-sidebar').removeClass('active');
	}
});

// Tabs start --------------------------
$(document).on('click', '.js-tab-nav-item', function () {
	let thisValueData = $(this).data('tab');
	if (!$(this).hasClass('active')) {
		$(this).parents('.js-tab').find('.js-tab-nav-item').removeClass('active');
		$(this).addClass('active');
	}
	let contentData = $(this).parents('.js-tab').find('.js-tab-body-item');
	contentData.each(function () {
		if ($(this).data('tab') == thisValueData) {
			contentData.removeClass('active').hide();
			$(this).addClass('active').show();
		}
	});
});
// Tabs end --------------------------

$(document).on('click', function (e) {
	if (!$(e.target).closest(".js-menu-categories-btn").length && !$(e.target).closest('.js-menu-categories').length) {
		$('.js-menu-categories-btn').removeClass('open');
		$('.js-menu-categories').removeClass('open');
	}
	if (!$(e.target).closest(".js-search-btn").length && !$(e.target).closest('.js-search').length) {
		$('.js-search-btn').removeClass('open');
		$('.js-search').removeClass('open');
	}
	if (!$(e.target).closest(".js-menu-flex__btn").length && !$(e.target).closest('.js-menu-flex__popup').length) {
		$('.js-menu-flex__btn').removeClass('open');
		$('.js-menu-flex__list').removeClass('open');
	}
	if (!$(e.target).closest(".js-main-menu__btn").length && !$(e.target).closest('.js-main-menu').length) {

		if ($(window).width() > 992) {
			$('.js-main-menu__btn').removeClass('open');
			$('.js-main-menu__body').removeClass('open');
		}
	}



});

$(document).on('click', '.js-menu-categories-btn', function () {
	if ($(window).width() > 992) {
		if (!$(this).hasClass('open')) {
			$(this).addClass('open');
			$('.js-menu-categories').addClass('open');
		} else {
			$(this).removeClass('open');
			$('.js-menu-categories').removeClass('open');
		}
	} else {
		if (!$(this).hasClass('open')) {
			$(this).addClass('open');
			$('.js-menu-categories').slideDown(300);
		} else {
			$(this).removeClass('open');
			$('.js-menu-categories').slideUp(300);
		}
	}

});


$(document).on('click', '.js-main-menu__btn', function () {
	if ($(window).width() > 992) {
		if (!$(this).hasClass('open')) {
			$('.js-main-menu__btn').removeClass('open');
			$('.js-main-menu__body').removeClass('open');
			$(this).addClass('open');
			$(this).parents('.js-main-menu').find('.js-main-menu__body').addClass('open');
		} else {
			$(this).removeClass('open');
			$(this).parents('.js-main-menu').find('.js-main-menu__body').removeClass('open');
		}
	} else {
		if (!$(this).hasClass('open')) {
			$(this).addClass('open');
			$(this).parents('.js-main-menu').find('.js-main-menu__body').slideDown(300);
		} else {
			$(this).removeClass('open');
			$(this).parents('.js-main-menu').find('.js-main-menu__body').slideUp(300);
		}
	}

});



$(document).on('click', '.js-menu-btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$('.js-menu').addClass('open');
		$('body').addClass('lock');
	} else {
		$(this).removeClass('open');
		$('.js-menu').removeClass('open');
		$('body').removeClass('lock');
	}
});

$(document).on('click', '.js-search-btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$('.js-search').addClass('open');
	} else {
		$(this).removeClass('open');
		$('.js-search').removeClass('open');
	}
});


$(document).on('click', '.js-menu-flex__btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$(this).parents('.js-menu-flex__popup').find('.js-menu-flex__list').addClass('open');
	} else {
		$(this).removeClass('open');
		$(this).parents('.js-menu-flex__popup').find('.js-menu-flex__list').removeClass('open');
	}
});

var mixer = mixitup('.main-prod__image', {
    load: {
        filter: '.item-first'
    }
});

