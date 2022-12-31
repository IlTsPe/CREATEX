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
		modal.classList.add('none')
	}
});

//modal

const logIn = document.querySelector('.header__login'),
	modal = document.querySelector('.modal');

logIn.addEventListener('click', () => {
	modal.classList.remove('none')
});

modal.addEventListener('click', (e) => {
	const target = event.target;
	if (target && target.classList.contains('modal')) {
		modal.classList.add('none')
	}
});