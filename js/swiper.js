'use strict';

// инициализация Свайпера
const mySlider = new Swiper('.top-block__slider', {
	// НАСТРОЙКИ
	// пагинация (навигации)
	pagination: {
		el: '.swiper-pagination',
		//БУЛЛЕТЫ 
		//Точки
		clickable: true,
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// управление с помощью колеса мыши
	// mousewheel: {
	// 	sensitivity: 1, // чувствительность машины
	// 	eventsTarget: '.slider-top-block' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
	// },

	// кол-во показанных слайдов
	slidesPerView: 1, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// отступ между слайдами в px
	spaceBetween: 30,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// бесконечная прокрутка слайдера
	loop: true, // (отключить скролл, мультирядность, если slidesperview: 3, тогда, ниже ->)

	// кол-во повторяющихся слайдов
	// loopedSlides: 3,

	// автопрокрутка
	autoplay: {
		//  пауза между прокруткой
		delay: 3000,
		//  закончить на последнем слайде
		stopOnLastSlide: true,
		//  откл. после взятия ручного управления
		disableOnInteraction: true,
	},

	// скорость прокрутки слайдов
	speed: 1200,

});

// const mySlider2 = new Swiper('.item__slider', {
// 	// НАСТРОЙКИ
// 	// пагинация (навигации)
// 	pagination: {
// 		el: '.swiper-pagination',
// 		//БУЛЛЕТЫ 
// 		//Точки
// 		clickable: true,
// 	},

// 	simulateTouch: true, // переключение перетаскиванием мыши
// 	touchRatio: 1, // чувствительность свайпа
// 	touchAngle: 45, // угол срабатывания свайпа
// 	grabCursor: false, // меняет стрелку на руку

// 	// переключение на клавиатуре
// 	keyboard: {
// 		enabled: false, // вкл/выкл
// 		pageUpDown: false, // вкл/выкл, управление клавишами pageup, pagedown
// 	},

// 	// управление с помощью колеса мыши
// 	// mousewheel: {
// 	// 	sensitivity: 1, // чувствительность машины
// 	// 	eventsTarget: '.item__slider' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
// 	// },

// 	// кол-во показанных слайдов
// 	slidesPerView: 1, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

// 	// отключение функционала если слайдов меньше чем нужно
// 	watchOverflow: true,

// 	// отступ между слайдами в px
// 	spaceBetween: 20,

// 	// кол-во пролистываемых слайдов
// 	slidesPerGroup: 1,

// 	//стартовый слайд
// 	initialSlide: 0,

// 	// скорость прокрутки слайдов
// 	speed: 600,

// });

const mySlider3 = new Swiper('.info-slider', {
	// НАСТРОЙКИ
	// пагинация (навигации)
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	grabCursor: false, // меняет стрелку на руку

	// переключение на клавиатуре
	keyboard: {
		enabled: false, // вкл/выкл
		pageUpDown: false, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// управление с помощью колеса мыши
	// mousewheel: {
	// 	sensitivity: 1, // чувствительность машины
	// 	eventsTarget: '' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
	// },

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// отступ между слайдами в px
	spaceBetween: 0,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// скорость прокрутки слайдов
	speed: 600,

	breakpoints: {
		320: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 4,
		},
	},

});

const mySlider4 = new Swiper('.options__slider', {
	// НАСТРОЙКИ
	// пагинация (навигации)
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	grabCursor: false, // меняет стрелку на руку

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true,
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// управление с помощью колеса мыши
	// mousewheel: {
	// 	sensitivity: 1, // чувствительность машины
	// 	eventsTarget: '.options__slider' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
	// },

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// скорость прокрутки слайдов
	speed: 600,

	breakpoints: {
		320: {
			spaceBetween: 10,
			loop: true,
			centeredSlides: true,
			slidesPerView: 1.45,
			initialSlide: 2,
		},
		450: {
			spaceBetween: 20,
			loop: true,
			centeredSlides: true,
			slidesPerView: 1.9,
			initialSlide: 2,
		},
		659: {
			initialSlide: 0,
			loop: false,
			slidesPerView: 3,
			spaceBetween: 15,
			centeredSlides: false,
		},
		992: {
			initialSlide: 0,
			centeredSlides: false,
			loop: false,
			slidesPerView: 4,
			spaceBetween: 20,
		}
	},

});

// инициализация Свайпера
const mySlider5 = new Swiper('.slider-popup__container', {
	// НАСТРОЙКИ
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	grabCursor: true, // меняет стрелку на руку

	// переключение на клавиатуре
	keyboard: {
		enabled: false, // вкл/выкл
	},

	// управление с помощью колеса мыши
	// mousewheel: {
	// 	sensitivity: 1, // чувствительность машины
	// 	eventsTarget: '.slider-popup__container' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
	// },

	// кол-во показанных слайдов
	slidesPerView: 4, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	// initialSlide: 0,

	direction: 'vertical',

	// бесконечная прокрутка слайдера
	loop: false, // (отключить скролл, мультирядность, если slidesperview: 3, тогда, ниже ->)

	breakpoints: {
		320: {
			spaceBetween: 5,
		},
		480: {
			spaceBetween: 20,
		},
	},
});

// слайдер появляющийся в мобильной версии
const sliderMob = document.querySelector('.slider-products');
if (sliderMob) {
	let { clientWidth } = document.body;
	let yourSlider;
	const sliderInit = () => {
		yourSlider = new Swiper('.slider-products', {

			// отключение функционала если слайдов меньше чем нужно
			watchOverflow: true,
			initialSlide: 2,

			breakpoints: {
				320: {
					spaceBetween: 20,
					loop: true,
					centeredSlides: true,
					slidesPerView: 1.45,
					initialSlide: 2,
				},
				550: {
					// отключаем функционал слайдера
					slidesPerView: 100,
					spaceBetween: 0,
					loop: false,
					centeredSlides: false,
				}
			},

			simulateTouch: true,

		})
	}

	const resizeHandlerSlider = () => {
		if (clientWidth !== document.body.clientWidth && clientWidth < 550) {
			clientWidth = document.body.clientWidth;
			if (yourSlider && clientWidth > 550) {
				yourSlider.destroy();
			}

			sliderInit();
		}
	}

	// инит слайдера после загрузки 
	window.addEventListener('load', sliderInit);
	// новый инит слайдера после ресайза окна 
	window.addEventListener('resize', resizeHandlerSlider);
}




// 	// НАСТРОЙКИ
// 	// пагинация (навигации)
// 	pagination: {
// 		el: '.swiper-pagination',
// 		//БУЛЛЕТЫ
// 		//Точки
// 		clickable: true,
// 	},

// 	simulateTouch: true, // переключение перетаскиванием мыши
// 	touchRatio: 1, // чувствительность свайпа
// 	touchAngle: 45, // угол срабатывания свайпа
// 	grabCursor: false, // меняет стрелку на руку

// 	// переключение на клавиатуре
// 	keyboard: {
// 		enabled: false, // вкл/выкл
// 		pageUpDown: false, // вкл/выкл, управление клавишами pageup, pagedown
// 	},

// 	// управление с помощью колеса мыши
// 	mousewheel: {
// 		sensitivity: 1, // чувствительность машины
// 		eventsTarget: '.item-slider' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
// 	},

// 	// кол-во показанных слайдов
// 	slidesPerView: 1, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

// 	// отключение функционала если слайдов меньше чем нужно
// 	watchOverflow: true,

// 	// отступ между слайдами в px
// 	spaceBetween: 20,

// 	// кол-во пролистываемых слайдов
// 	slidesPerGroup: 1,

// 	//стартовый слайд
// 	initialSlide: 0,

// 	// скорость прокрутки слайдов
// 	speed: 600,
// });