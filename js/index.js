//console.log('1. Вёрстка валидная;\n2. Вёрстка семантическая -\n	В коде странице присутствуют < header >, <main>, <footer>, шесть элементов <section>,\n	один заголовок < h1 >, пять заголовков < h2 >, элемент < nav >, \n	два списка ul > li > a, десять кнопок < button >, \n	два инпута: <input type="email"> и <input type="tel">,\n	один элемент <textarea>, три атрибута placeholder,\n3. Вёрстка соответствует макету;\n4. Выполнены требования к css -\n	для построения сетки используются флексыб\n	при уменьшении масштаба страницы браузера вёрстка размещается по центру,\n	фоновый цвет тянется на всю ширину страницыб\n	иконки добавлены в формате .svg,\n	изображения добавлены в формате .jpg,\n	есть favicon;\n5. Добавлена интерактивность, реализуемая через css -\n	плавная прокрутка по якорям,\n	ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/,\n	добавлена дополнительная интерактивность: изменение внешнего вида курсора при наведени на кнопки,\n	добавлено изменение цвета текста при наведении на ссылки,\n	также при нажатии на ссылки и кнопки добавлено изменение насыщенности шрифта;\n	выполнено обязательное требование к интерактивности: плавное изменение внешнего вида\n	элемента при наведении и клике не влияющее на соседние элементы.\nОценка за задание 100 баллов.');

//console.log('1. Вёрстка соответствует макету.Ширина экрана 768px + 48\n	блок < header > +6\n	секция hero + 6\n	секция skills + 6\n	секция portfolio + 6\n	секция video + 6\n	секция price + 6\n	секция contacts + 6\n	блок < footer > +6\n2. Ни на одном из разрешений до 320px включительно не появляется\n	горизонтальная полоса прокрутки.\n	Весь контент страницы при этом сохраняется: не обрезается и не удаляется + 15\n	нет полосы прокрутки при ширине страницы от 1440рх до 768рх + 5\n	нет полосы прокрутки при ширине страницы от 768рх до 480рх + 5\n	нет полосы прокрутки при ширине страницы от 480рх до 320рх + 5\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню + 22\n	при ширине страницы 768рх панель навигации скрывается, появляется бургер - иконка + 2\n	при нажатии на бургер - иконку справа плавно появляется адаптивное меню, \n	бургер - иконка изменяется на крестик + 4\n	высота адаптивного меню занимает всю высоту экрана.\n	При ширине экрана 768 - 620рх вёрстка меню соответствует макету, \n	когда экран становится уже, меню занимает всю ширину экрана + 4\n	при нажатии на крестик адаптивное меню плавно скрывается\n	уезжая за правую часть экрана, крестик превращается в бургер - иконку + 4\n	бургер - иконка, которая при клике превращается в крестик, \n	создана при помощи css - анимаций без использования изображений + 2\n	ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям + 2\n	при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, \n	крестик превращается в бургер - иконку + 4\n		Колличество баллов за задание - 75.');

console.log('1.   Смена изображений в секции portfolio; \n2.   Перевод страницы на два языка; \n3.   При клике по надписи ru англоязычная страница переводится на русский язык; \n4.   При клике по надписи en русскоязычная страница переводится на английский язык; \n5.   Надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е.выделяются стилем; \n6.   Переключение светлой и тёмной темы: \n	- тёмная тема приложения сменяется светлой; \n		- светлая тема приложения сменяется тёмной; \n			- после смены светлой и тёмной темы интерактивные элементы по - прежнему изменяют внешний вид при наведении и клике\n			и при этом остаются видимыми на странице(нет ситуации с белым шрифтом на белом фоне);\n7.   Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы;\n8. Дополнительный функционал: сложные эффекты для кнопки секции hero при клике.\n      Оценка 75 баллов.');

//import i18Obj from './translate.js'

//==================================================================================================================================================
//Add buttons animation

var $button = document.querySelector('.button');
$button.addEventListener('click', function () {
	var duration = 0.3,
		delay = 0.08;
	TweenMax.to($button, duration, { scaleY: 2, ease: Expo.easeOut });
	TweenMax.to($button, duration, { scaleX: 2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay });
	TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

//========================================================================================================================================================

//Show tablet navigation

const hamburger = document.querySelector('.hamburger');
const hamburger__line = document.querySelectorAll('.hamburger__line')
const navigation = document.querySelector('.header__navigation');
const navigationLi = document.querySelectorAll('.navigation__li');
const blockShadow = document.querySelector('.block-shadow');

(function () {
	hamburger.addEventListener('click', (() => {
		navigation.classList.toggle('header__navigation__active')
		hamburger__line.forEach((line) => { line.classList.toggle('hamburger__line-close') })
		blockShadow.classList.toggle('block-shadow-active')
	}));
}());

(function () {
	navigationLi.forEach((li) => {
		li.addEventListener('click', (() => {
			navigation.classList.toggle('header__navigation__active')
			hamburger__line.forEach((line) => { line.classList.toggle('hamburger__line-close') })
			blockShadow.classList.toggle('block-shadow-active')
		}))
	})
}());

//================================================================================================//
//Show images

const portfolioImage = document.querySelectorAll('.portfolio___image');

const portfolioBtnsContainer = document.querySelector('.portfolio__buttons__container');

function changeImage(event) {
	if (event.target.classList.contains('portfolio__button')) {

		portfolioImage.forEach((img, index) => { img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg` })
	}
}
portfolioBtnsContainer.addEventListener('click', changeImage)

//Image caching

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {
	seasons.forEach((value) => {
		for (let i = 1; i <= 6; i++) {
			const img = new Image();
			img.src = `./assets/img/${value}/${i}.jpg`;
		}
	})
}
preloadSummerImages();

//=======================================================================================//
//Change button color
const portfolioButton = document.querySelectorAll('.portfolio__button')

function changeClassActive(event) {
	if (event.target.classList.contains('portfolio__button')) {
		portfolioButton.forEach((button) => button.classList.remove('button__colored'))
		portfolioButton.forEach((button) => button.classList.add('button__bordered'))
		event.target.classList.add('button__colored')
	}
}
portfolioBtnsContainer.addEventListener('click', changeClassActive)

//======================================================================================//

//Add language switcher

const i18Obj = {
	'en': {
		'skills': 'Skills',
		'portfolio': 'Portfolio',
		'video': 'Video',
		'price': 'Price',
		'contacts': 'Contacts',
		'hero-title': 'Alexa Rise',
		'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
		'hire': 'Hire me',
		'skill-title-1': 'Digital photography',
		'skill-text-1': 'High-quality photos in the studio and on the nature',
		'skill-title-2': 'Video shooting',
		'skill-text-2': 'Capture your moments so that they always stay with you',
		'skill-title-3': 'Rotouch',
		'skill-text-3': 'I strive to make photography surpass reality',
		'skill-title-4': 'Audio',
		'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
		'winter': 'Winter',
		'spring': 'Spring',
		'summer': 'Summer',
		'autumn': 'Autumn',
		'price-description-1-span-1': 'One location',
		'price-description-1-span-2': '120 photos in color',
		'price-description-1-span-3': '12 photos in retouch',
		'price-description-1-span-4': 'Readiness 2-3 weeks',
		'price-description-1-span-5': 'Make up, visage',
		'price-description-2-span-1': 'One or two locations',
		'price-description-2-span-2': '200 photos in color',
		'price-description-2-span-3': '20 photos in retouch',
		'price-description-2-span-4': 'Readiness 1-2 weeks',
		'price-description-2-span-5': 'Make up, visage',
		'price-description-3-span-1': 'Three locations or more',
		'price-description-3-span-2': '300 photos in color',
		'price-description-3-span-3': '50 photos in retouch',
		'price-description-3-span-4': 'Readiness 1 week',
		'price-description-3-span-5': 'Make up, visage, hairstyle',
		'order': 'Order shooting',
		'contact-me': 'Contact me',
		'send-message': 'Send message'
	},
	'ru': {
		'skills': 'Навыки',
		'portfolio': 'Портфолио',
		'video': 'Видео',
		'price': 'Цены',
		'contacts': 'Контакты',
		'hero-title': 'Алекса Райс',
		'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
		'hire': 'Пригласить',
		'skill-title-1': 'Фотография',
		'skill-text-1': 'Высококачественные фото в студии и на природе',
		'skill-title-2': 'Видеосъемка',
		'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
		'skill-title-3': 'Ретушь',
		'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
		'skill-title-4': 'Звук',
		'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
		'winter': 'Зима',
		'spring': 'Весна',
		'summer': 'Лето',
		'autumn': 'Осень',
		'price-description-1-span-1': 'Одна локация',
		'price-description-1-span-2': '120 цветных фото',
		'price-description-1-span-3': '12 отретушированных фото',
		'price-description-1-span-4': 'Готовность через 2-3 недели',
		'price-description-1-span-5': 'Макияж, визаж',
		'price-description-2-span-1': 'Одна-две локации',
		'price-description-2-span-2': '200 цветных фото',
		'price-description-2-span-3': '20 отретушированных фото',
		'price-description-2-span-4': 'Готовность через 1-2 недели',
		'price-description-2-span-5': 'Макияж, визаж',
		'price-description-3-span-1': 'Три локации и больше',
		'price-description-3-span-2': '300 цветных фото',
		'price-description-3-span-3': '50 отретушированных фото',
		'price-description-3-span-4': 'Готовность через 1 неделю',
		'price-description-3-span-5': 'Макияж, визаж, прическа',
		'order': 'Заказать съемку',
		'contact-me': 'Свяжитесь со мной',
		'send-message': 'Отправить'
	}
}

let currentLang = 'en'
const languagesSwitcher = document.querySelector('.radio__swither')
const russian = document.querySelector('.russian__label')
const english = document.querySelector('.english__label')
const email = document.querySelector('.e-mail')
const tel = document.querySelector('.phone')
const message = document.querySelector('.message')
const data = document.querySelectorAll('[data-i18]')

languagesSwitcher.addEventListener('click', getTranslates)

function getTranslates(event) {
	let lang = ''
	if (event.target.classList.contains('english__label')) {
		lang = 'en'
		data.forEach((el) => {
			if (i18Obj.en[el.dataset.i18]) {
				el.textContent = i18Obj[lang][el.dataset.i18]
			}
		})
		english.classList.remove('active-label')
		russian.classList.remove('active-label')
		english.classList.add('active-label')
		email.placeholder = 'E-mail'
		tel.placeholder = 'Phone'
		message.placeholder = 'Message'
		currentLang = lang
	}
	if (event.target.classList.contains('russian__label')) {
		lang = 'ru'
		data.forEach((el) => {
			if (i18Obj.en[el.dataset.i18]) {
				el.textContent = i18Obj[lang][el.dataset.i18]
			}
		})
		russian.classList.remove('active-label')
		english.classList.remove('active-label')
		russian.classList.add('active-label')
		email.placeholder = 'Электронный адрес'
		tel.placeholder = 'Телефон'
		message.placeholder = 'Сообщение'
		currentLang = lang
	}
}
//====================================================================================================
//Local storage

//Save the languages

function setLocalStorage() {
	localStorage.setItem('currentLang', currentLang);
	localStorage.setItem('currentTheme', currentTheme);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
	if (localStorage.getItem('currentLang')) {
		currentLang = localStorage.getItem('currentLang');
		setLanguages(currentLang)
	}
	if (localStorage.getItem('currentTheme')) {
		currentTheme = localStorage.getItem('currentTheme');
		setColorTheme(currentTheme)
	}
}
window.addEventListener('load', getLocalStorage)

function setLanguages(lang) {
	data.forEach((el) => {
		if (i18Obj.en[el.dataset.i18]) {
			el.textContent = i18Obj[lang][el.dataset.i18]
		}
	})
	if (lang == 'en') {
		email.placeholder = 'E-mail'
		tel.placeholder = 'Phone'
		message.placeholder = 'Message'
	}
	if (lang == 'ru') {
		email.placeholder = 'Электронный адрес'
		tel.placeholder = 'Телефон'
		message.placeholder = 'Сообщение'
	}
}
//======================================================================================

//Dark / light theme switcher

let currentTheme = 'light'
const themeSwitcher = document.querySelector('.theme__switcher')

function getColorTheme() {
	let theme = ''
	themeSwitcher.classList.toggle('theme__switcher_light')
	if (themeSwitcher.classList.contains('theme__switcher_light')) {
		theme = 'light'
		currentTheme = theme
		document.documentElement.style.setProperty('--body-color', '#ffffff')
		document.documentElement.style.setProperty('--wrapper-color', '#ffffff')
		document.documentElement.style.setProperty('--section-title-color', '#000000')
		document.documentElement.style.setProperty('--content-color', '#000000')
		document.documentElement.style.setProperty('--price-title-color', '#000000')
		document.documentElement.style.setProperty('--button-bordered-color', '#ffffff')
		document.documentElement.style.setProperty('--button-bordered-hover', '#bdae82')
	} else {
		theme = 'dark'
		currentTheme = theme
		document.documentElement.style.setProperty('--body-color', '#000000')
		document.documentElement.style.setProperty('--wrapper-color', '#000000')
		document.documentElement.style.setProperty('--section-title-color', '#bdae82')
		document.documentElement.style.setProperty('--content-color', '#ffffff')
		document.documentElement.style.setProperty('--price-title-color', '#ffffff')
		document.documentElement.style.setProperty('--button-bordered-color', '#000000')
		document.documentElement.style.setProperty('--button-bordered-hover', '#ffffff')
	}
}

function setColorTheme(theme) {
	if (theme == 'light') {
		themeSwitcher.classList.add('theme__switcher_light')
		document.documentElement.style.setProperty('--body-color', '#ffffff')
		document.documentElement.style.setProperty('--wrapper-color', '#ffffff')
		document.documentElement.style.setProperty('--section-title-color', '#000000')
		document.documentElement.style.setProperty('--content-color', '#000000')
		document.documentElement.style.setProperty('--price-title-color', '#000000')
		document.documentElement.style.setProperty('--button-bordered-color', '#ffffff')
		document.documentElement.style.setProperty('--button-bordered-hover', '#bdae82')
	}
	if (theme == 'dark') {
		themeSwitcher.classList.remove('theme__switcher_light')
		document.documentElement.style.setProperty('--body-color', '#000000')
		document.documentElement.style.setProperty('--wrapper-color', '#000000')
		document.documentElement.style.setProperty('--section-title-color', '#bdae82')
		document.documentElement.style.setProperty('--content-color', '#ffffff')
		document.documentElement.style.setProperty('--price-title-color', '#ffffff')
		document.documentElement.style.setProperty('--button-bordered-color', '#000000')
		document.documentElement.style.setProperty('--button-bordered-hover', '#ffffff')
	}
}

themeSwitcher.addEventListener('click', getColorTheme)
