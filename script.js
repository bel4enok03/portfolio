// header start
window.addEventListener('scroll', function () {
	let header = this.document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});
// header end

// burger menu start
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
// burger menu end

// section Work button toogle start

$(document).on('click', '.toogleBtn', function () {
	if (!$(this).prev().hasClass('gitHubLink')) {

		$(this).prev().addClass('gitHubLink');
		$(this).prev().prev().addClass('webSiteLink');
		$(this).addClass('activLink');
	} else {
		$(this).prev().removeClass('gitHubLink');
		$(this).prev().prev().removeClass('webSiteLink');
		$(this).removeClass('activLink');
	}
});

$('div.workOverlay').mouseleave(function () {
	$('.toogleBtn').each(function () {
		$(this).removeClass('activLink');
		$(this).prev().removeClass('gitHubLink');
		$(this).prev().prev().removeClass('webSiteLink');
	});
});

// section Work button toogle end
