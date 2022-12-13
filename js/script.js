const burger = document.querySelector('.burger'),
	close = document.querySelector('.close'),
	nav = document.querySelector('.header__nav'),
	body = document.querySelector('body'),
	overaly = document.querySelector('.header__overlay');


burger.addEventListener('click', () => {
	nav.classList.add('header__nav--active');
	body.classList.add('js-scroll');
	overaly.style.display = 'block';

})

close.addEventListener('click', () => {
	nav.classList.remove('header__nav--active');
	body.classList.remove('js-scroll');
	overaly.style.display = 'none';
})

overaly.addEventListener('click', () => {
	nav.classList.remove('header__nav--active');
	body.classList.remove('js-scroll');
	overaly.style.display = 'none';
})

document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') {
	nav.classList.remove('header__nav--active');
	body.classList.remove('js-scroll');
	overaly.style.display = 'none';
	}
});