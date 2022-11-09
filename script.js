window.addEventListener('scroll', function () {
	let header = this.document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

menuToggle.onclick = () => {
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('active');
	menuToggle.classList.remove('active');
};

