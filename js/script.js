'use strict';

// меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__list');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
};

// Открыть фильтр 

const filterOpen = document.querySelector('.filter__open');
const filter = document.querySelector('.filter');
const filterClose = document.querySelector('.filter__close')

if (filter) {
	filterOpen.addEventListener('click', function (e) {
		filter.classList.add('_active');
		e.preventDefault();
	});
	filterClose.addEventListener('click', function (e) {
		filter.classList.remove('_active');
		e.preventDefault();
	});
};

// фильтр - посмотреть все

// материалы
const materialMore = document.querySelector('.filter__cheks-more_material');
const materialHide = document.querySelector('.filter__checks-none');

if (materialMore) {
	materialMore.addEventListener('click', function (e) {
		e.preventDefault();
		materialMore.style.display = "none";
		materialHide.style.display = "block";
	});
};
// цвета
const colorMore = document.querySelector('.filter__cheks-more_color');
const colorHide = document.querySelector('.filter__checks-none_color');

if (colorMore) {
	colorMore.addEventListener('click', function (e) {
		e.preventDefault();
		colorMore.style.display = "none";
		colorHide.style.display = "block";
	});
};

// поиск

const iconSearch = document.querySelector('.header__search-mob');
const searchBody = document.querySelector('.header__search');
const searchClose = document.querySelector('.header__close-icon');
const searchInput = document.querySelector('.header__search input');
const searchWrapper = document.querySelector('header__search-wrapper');

searchInput.addEventListener('click', function () {
	searchBody.classList.add('_active');
});

iconSearch.addEventListener('click', function () {
	searchBody.classList.add('_active');

});

document.addEventListener('click', function (e) {
	if (e.target.closest('div') != searchBody && e.target.closest('div') != iconSearch) {
		searchBody.classList.remove('_active');
	}
});




// ТАБЫ

const tabItem = document.querySelectorAll('.tabs__item');
const tabBody = document.querySelectorAll('.tabs__block');

if (tabItem && tabBody) {
	for (let i = 0; i < tabItem.length; i++) {
		tabItem[i].addEventListener("click", function (e) {
			e.preventDefault();
			let activeTabAttr = e.target.getAttribute("data-tab");

			for (let j = 0; j < tabItem.length; j++) {
				let contentAttr = tabBody[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					tabItem[j].classList.add("_active");
					tabBody[j].classList.add("_active");
				} else {
					tabItem[j].classList.remove("_active");
					tabBody[j].classList.remove("_active");
				}
			};
		});
	};
};

// ползунок в фильтре

var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

if (stepsSlider) {
	noUiSlider.create(stepsSlider, {
		start: [821, 1821211],
		connect: true,
		range: {
			'min': 821,
			'max': 2000000
		}
	});


	stepsSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	inputs.forEach(function (input, handle) {

		input.addEventListener('change', function () {
			stepsSlider.noUiSlider.setHandle(handle, this.value);
		});

		input.addEventListener('keydown', function (e) {

			var values = stepsSlider.noUiSlider.get();
			var value = Number(values[handle]);

			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
			var steps = stepsSlider.noUiSlider.steps();

			// [down, up]
			var step = steps[handle];

			var position;

			// 13 is enter,
			// 38 is key up,
			// 40 is key down.
			switch (e.which) {

				case 13:
					stepsSlider.noUiSlider.setHandle(handle, this.value);
					break;

				case 38:

					// Get step to go increase slider value (up)
					position = step[1];

					// false = no step is set
					if (position === false) {
						position = 1;
					}

					// null = edge of slider
					if (position !== null) {
						stepsSlider.noUiSlider.setHandle(handle, value + position);
					}

					break;

				case 40:

					position = step[0];

					if (position === false) {
						position = 1;
					}

					if (position !== null) {
						stepsSlider.noUiSlider.setHandle(handle, value - position);
					}

					break;
			}
		});
	});
};

// МЕНЯЕМ КНОПКИ КОРЗИНЫ НА СТРАНИЦЕ ТОВАРА
const cardAdd = document.querySelector('.info__btn_add');
const cardGo = document.querySelector('.info__btn_go');

if (cardAdd) {
	cardAdd.addEventListener('click', function (e) {
		e.preventDefault();
		cardAdd.style.display = 'none';
		cardGo.style.display = 'flex';
	});
};

// ВЫБОР РУЧЕК и ПРИНТОВ
const itemsHandle = document.querySelectorAll('.info__handle .info__wrapper-image');
const itemsPrints = document.querySelectorAll('.info__prints .info__wrapper-image');

function deleteActiveHandle() {
	itemsHandle.forEach(el => {
		el.classList.remove('_active');
	});
};

if (itemsHandle.length > 0) {
	itemsHandle.forEach(el => {
		el.addEventListener('click', function () {
			deleteActiveHandle();
			el.classList.add('_active');
		});
	});
}

function deleteActivePrints() {
	itemsPrints.forEach(el => {
		el.classList.remove('_active');
	});
};

if (itemsPrints.length > 0) {
	itemsPrints.forEach(el => {
		el.addEventListener('click', function () {
			deleteActivePrints();
			el.classList.add('_active');
		});
	});
}

// СЧЕТЧИК КОРЗИНЫ

let itemsAddToCard = document.querySelectorAll('._add');
let counter = 0;
const card = document.querySelector('.header__card');
const cardOutput = document.querySelector('.header__card span');

if (itemsAddToCard.length > 0) {
	itemsAddToCard.forEach(el => {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			counter += 1;
			card.classList.add('_active');
			cardOutput.innerHTML = counter;
		});
	});
};


// ВИДЕО КОНТРОЛЛЕР PLAY

const video = document.querySelector('.video__src');
const videoContainer = document.querySelector('.video__wrapper');
const videoControls = document.querySelector('.video__control');
const videoOver = document.querySelector('.video__over');

if (video) {
	video.addEventListener('play', function () {
		videoContainer.classList.add('video-is-playing');
	})
	video.addEventListener('pause', function () {
		videoContainer.classList.remove('video-is-playing');
	})
	videoControls.addEventListener('click', function () {
		video.play();
	});
	videoOver.addEventListener('click', function () {
		video.pause();
	});
}


// POPUP

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding'); // фиксированные объекты

let unlock = true; // блочим повторное нажатие на ссылку попапа, пока он открывается

const timeout = 800; // таже цифра что и в транзишн

const popupImage = document.querySelector('.popup__image img');
const popupMiniImage = document.querySelectorAll('.slider-popup__slide img');
const popupSliderSlide = document.querySelectorAll('.slider-popup__slide');

function popupMiniImageDeleteActive() {
	popupMiniImage.forEach(el => {
		el.classList.remove('_active');
	});
};

// чекбоксы в корзине

const checkCardPoint = document.querySelectorAll('.items__input_point');
const checkCardAll = document.querySelector('.items__check_all');

if (checkCardAll) {
	checkCardAll.addEventListener('click', function (e) {
		checkCardAll.classList.toggle('_active');
		if (checkCardAll.classList.contains('_active')) {
			checkCardPoint.forEach(el => {
				el.checked = true;
			});
		} else {
			checkCardPoint.forEach(el => {
				el.checked = false;
			});
		}
	});
};

// прокрутка до нужного раздела при клике

const linkGo = document.querySelectorAll('.link-go[data-goto]');

if (linkGo.length > 0) {
	linkGo.forEach(link => {
		link.addEventListener('click', onLinkClick);
	});

	function onLinkClick(e) {
		const link = e.target;
		if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
			const gotoBlock = document.querySelector(link.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		};

	}
};

// ПРОВЕРКА В ФОРМЕ

const orderBtn = document.querySelector('.order__btn');
const orderInputs = document.querySelectorAll('.order input');
const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const phoneRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/;

if (orderBtn) {
	orderBtn.addEventListener('click', function (e) {
		e.preventDefault();
		orderInputs.forEach(el => {
			if (el.classList.contains('order__first-name')) {
				if (el.value.length < 2 || /[\d.,:]/.test(el.value)) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			if (el.classList.contains('order__last-name')) {
				if (el.value.length < 2 || /[\d.,:]/.test(el.value)) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			if (el.classList.contains('order__mail')) {
				if (!emailRegexp.test(el.value)) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			// if (el.classList.contains('order__phone')) {
			// 	if (!phoneRegexp.test(el.value)) {
			// 		el.style.border = '1px solid #ff6d6d';
			// 	} else {
			// 		el.style.border = 'none';
			// 	}
			// };
			if (el.classList.contains('order__town')) {
				if (el.value.length < 2) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			if (el.classList.contains('order__street')) {
				if (el.value.length < 2) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			if (el.classList.contains('order__house')) {
				if (el.value.length < 1) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			if (el.classList.contains('order__floor')) {
				if (el.value.length < 1) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			if (el.classList.contains('order__flat')) {
				if (el.value.length < 1) {
					el.style.border = '1px solid #ff6d6d';
				} else {
					el.style.border = 'none';
				}
			};
			if (el.classList.contains('order__agree')) {
				const orderCheckAgree = document.querySelector('.order__block_agree label');
				if (!el.checked) {
					orderCheckAgree.classList.add('_wrong');
				} else {
					orderCheckAgree.classList.remove('_wrong');
				}
			};
		});
	});
}

// МАСКА ВВОДА НОМЕРА

const phoneInput = document.querySelector('.order__phone');

if (phoneInput) {
	phoneInput.addEventListener('input', function () {
		phoneInput.style.color = '#31465a';
	});

	var element = document.querySelector('.order__phone');
	var maskOptions = {
		mask: '+7(000)000-00-00',
		lazy: false
	}
	var mask = new IMask(element, maskOptions);
}

// DROPDOWN input Город

const inputCityArrow = document.querySelector('.order__city-arrow');
const inputCity = document.querySelector('.order__town');
const inputWrapper = document.querySelector('.order__city');
const inputCityItems = document.querySelectorAll('.order__city-item');

if (inputCity) {
	inputCityArrow.addEventListener('click', function () {
		inputWrapper.classList.toggle('_active');
	});

	inputCityItems.forEach(el => {
		el.addEventListener('click', function () {
			inputCity.value = el.dataset.city;
			inputWrapper.classList.remove('_active');
		});
	});
}

// кол-во товара и цена в корзине
const counterMinus = document.querySelectorAll('.items__action_minus');
const counterPlus = document.querySelectorAll('.items__action_plus');

counterMinus.forEach(el => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let counter = el.nextElementSibling;
		let counterNumber = Number(counter.innerHTML);
		if (counterNumber === 1) {

		} else {
			counterNumber -= 1;
			counter.innerHTML = counterNumber;
		}
	});
});

counterPlus.forEach(el => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let counter = el.previousElementSibling;
		let counterNumber = Number(counter.innerHTML);
		counterNumber += 1;
		counter.innerHTML = counterNumber;
	});
});

// вешаем обработчик на линк отсылающий на попап
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			let src = e.target.dataset.src;
			let number = e.target.dataset.number;
			popupMiniImageDeleteActive();
			popupMiniImage.forEach(el => {
				if (number === el.dataset.number) {
					el.classList.add('_active');
				}
			});
			popupImage.src = src;
			const currentPopup = document.querySelector('.popup');
			popupOpen(currentPopup);
			e.preventDefault();
		})
	}
};

popupMiniImage.forEach(el => {
	el.addEventListener('click', function (e) {
		popupMiniImageDeleteActive()
		let src = e.target.dataset.src;
		e.target.classList.add('_active');
		popupImage.src = src;
	});
});

// закрытие popup по клику на иконку закрытия
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup')); // ближайший класс .popup
			e.preventDefault();
		})
	}
};

// функция открытия
function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		// если есть открытый попап и попап находится в нем, мы оставляем бадилок
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) { // при клике на попап контент ничего не произойдет, если клик выше попап закроется
				popupClose(e.target.closest('.popup'));
			}
		});
	}
};

// функция закрытия
// если есть открытый попап и попап находится в нем, мы оставляем бадилок
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

// блокируем сролл бади при открытом попапе
function bodyLock() {
	// избегаем сдвиг контента, скрываем скролл. при открытии попапа.
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
};

// анлок бади + лок скролла на время, чтоб не дергался попап
function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
};

// закрытие попапа по ескейп

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// полифилы - подгоняют параметры под старые браузеры. 
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойства
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// адаптивный переброс файлов между блоков

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max"); // min и max
da.init();

// HOVER SLIDER

class HvrSlider {
	constructor(selector) {
		const elements = document.querySelectorAll(selector);
		elements.forEach((el) => {
			if (el.querySelectorAll('img').length > 1) {
				const hvr = document.createElement('div');
				hvr.classList.add('hvr');

				const hvrImages = document.createElement('div');
				hvrImages.classList.add('hvr__images');
				hvr.appendChild(hvrImages);

				const hvrSectors = document.createElement('div');
				hvrSectors.classList.add('hvr__sectors');
				hvrImages.appendChild(hvrSectors);

				const hvrDots = document.createElement('div');
				hvrDots.classList.add('hvr__dots');
				hvr.appendChild(hvrDots);

				el.parentNode.insertBefore(hvr, el);
				hvrImages.prepend(el);

				const hvrImagesArray = hvr.querySelectorAll('img');
				hvrImagesArray.forEach(() => {
					hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
					hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
				});
				hvrDots.firstChild.classList.add('hvr__dot--active');
				const setActiveEl = function (targetEl) {
					const index = [...hvrSectors.children].indexOf(targetEl);
					hvrImagesArray.forEach((img, idx) => {
						if (index == idx) {
							img.style.display = 'block';
						} else {
							img.style.display = 'none';
						}
					});
					hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
						if (index == idx) {
							dot.classList.add('hvr__dot--active');
						} else {
							dot.classList.remove('hvr__dot--active');
						}
					});
				};
				hvrSectors.addEventListener('mouseover', function (e) {
					if (e.target.matches('.hvr__sector')) {
						setActiveEl(e.target);
					}
				});

				// hvrSectors.addEventListener('touchmove', function (e) {
				// 	const position = e.changedTouches[0];
				// 	const target = document.elementFromPoint(position.clientX, position.clientY);
				// 	if (target.matches('.hvr__sector')) {
				// 		setActiveEl(target);
				// 	}
				// });
			}
		});
	}
}

new HvrSlider('.images');

// проверка на телефон/пк, если телефон, к бади добавляется класс тач, если пк - класс пк.
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	setInterval(slideChangesMobile, 3000)
	setInterval(slideChangesDots, 3000);
}

let counterDots = 0;

function slideChangesDots() {

	const dots = document.querySelectorAll('.hvr__dots');

	dots.forEach(el => {
		const dot = el.childNodes;
		if (counterDots == 4) {
			dot[`${counterDots}`].classList.remove('hvr__dot--active');
			dot[`${0}`].classList.add('hvr__dot--active');
		} else {
			dot[`${counterDots}`].classList.remove('hvr__dot--active');
			dot[`${counterDots + 1}`].classList.add('hvr__dot--active');
		}
	});
	if (counterDots == 4) {
		counterDots = 0;
	} else {
		counterDots += 1;
	}
}

let counterHvr = 1;

function slideChangesMobile() {
	const targetImages = document.querySelectorAll(`.hvr__image_${counterHvr}`);
	const targetImagesNext = document.querySelectorAll(`.hvr__image_${counterHvr + 1}`);
	targetImages.forEach(el => {
		el.style.display = 'none';
	});
	targetImagesNext.forEach(elNext => {
		elNext.style.display = 'block';
	});
	counterHvr += 1;
	if (counterHvr == 5) {
		counterHvr = 0;
	}
}

// favorites

const favorites = document.querySelectorAll('.item__point-favorite');

if (favorites) {
	favorites.forEach(el => {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			e.target.classList.toggle('_active');
		});
	});
};