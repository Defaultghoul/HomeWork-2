// 1
let input = document.querySelector('.slider__input');
let sliderImage = document.querySelector('.slider__image');

input.addEventListener(
	'input',
	_.debounce(() => {
		sliderImage.style.width = input.value * 5 + 'px';
	}, 100)
);

// 2
let box = document.querySelector('#box');

document.addEventListener(
	'mousemove',
	_.debounce(event => {
		box.style.left = event.clientX + 'px';
		box.style.top = event.clientY + 'px';
	}, 100)
);
