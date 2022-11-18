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

toastr.options = {
	closeButton: true,
	debug: false,
	newestOnTop: true,
	progressBar: false,
	positionClass: 'toast-bottom-right',
	preventDuplicates: false,
	onclick: null,
	showDuration: '300',
	hideDuration: '1000',
	timeOut: '5000',
	extendedTimeOut: '1000',
	showEasing: 'swing',
	hideEasing: 'linear',
	showMethod: 'fadeIn',
	hideMethod: 'fadeOut',
};
$('#sendEmail').click(function (e) {
	e.preventDefault();
	let emailMessage = $('.form').serializeJSON();

	if (emailMessage.name == '') {
		toastr.warning('Поле "Full Name" не заполнено!');
		return;
	}

	if (emailMessage.email == '') {
		toastr.warning('Поле "email" не заполнено!');
		return;
	}

	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailMessage.email)) {
		toastr.warning('Неверный формат "email"!');
		return;
	}

	if (emailMessage.message == '') {
		toastr.warning('Поле "message" не заполнено!');
		return;
	}

	setTimeout(sendEmail, 1000, emailMessage);
});

function sendEmail(emailMessage) {
	fetch('http://www.portfolio-api.tatyana-chuvakova.ru/api/Email', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: emailMessage.name,
			email: emailMessage.email,
			title: 'Новое сообщение',
			message: emailMessage.message,
		}),
	})
		.then(function () {
			toastr.success('Сообщение отправлено');
		})
		.catch(function () {
			toastr.error('не удалось отправить сообщение');
		});
}
//contact form end
