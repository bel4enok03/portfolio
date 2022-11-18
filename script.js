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

//contact form start

// let nameUser = document.querySelector('#name').value
// let emailUser = document.querySelector('#email').value
// let messageUser = document.querySelector('#message').value

$('#sendEmail').click(function (e) {
	e.preventDefault();
	setTimeout(sendEmail(), 1000);
});

function sendEmail() {
	fetch('http://www.portfolio-api.tatyana-chuvakova.ru/api/Email', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			title: 'Новое сообщение',
			message: document.getElementById('message').value,
		}),
	})
		.then(function () {
			alert('Сообщение отправлено');
		})
		.catch(function () {
			alert('не удалось отправить сообщение');
		});
}
//contact form end