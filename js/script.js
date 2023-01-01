const burger = document.querySelector('.burger'),
	close = document.querySelectorAll('.close'),
	nav = document.querySelector('.header__nav'),
	body = document.querySelector('body'),
	overaly = document.querySelector('.header__overlay'),
	menuItem = document.querySelectorAll('.header__link');

menuItem.forEach((e) => {
	e.addEventListener('click', () => {
		closeActive()
	})
});

burger.addEventListener('click', () => {
	nav.classList.add('header__nav--active');
	body.classList.add('js-scroll');
	overaly.style.display = 'block';

})

close.forEach(e => {
	e.addEventListener('click', () => {
		closeActive()
	})
});

function closeActive() {
	nav.classList.remove('header__nav--active');
	body.classList.remove('js-scroll');
	overaly.style.display = 'none';
	modal.classList.add('none')
	document.body.style.overflow = '';
}



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
	modal = document.querySelector('.modal'),
	bodyM = document.querySelector('body');

logIn.addEventListener('click', () => {
	modal.classList.remove('none')
	document.body.style.overflow = 'hidden';
});

modal.addEventListener('click', (e) => {
	const target = event.target;
	if (target && target.classList.contains('modal')) {
		modal.classList.add('none')
		document.body.style.overflow = '';
	}
});

//scroll

$(window).scroll(function() {
	if($(this).scrollTop() > 950) {
		$('.pageup').fadeIn(300);
	}else {
		$('.pageup').fadeOut(300);
	}
});

$("a[href^='#']").click(function() {
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});
