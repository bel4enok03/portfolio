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

let toogleBtn = document.querySelectorAll('.toogleBtn');
let menuItem = document.querySelectorAll('.toogleMenuLink a');
let menuItemActiv = false;

// toogleBtn.forEach((btn, i) => {
// 	btn.addEventListener('click', () => {
// 		if (!menuItemActiv) {
// 			menuItem[i * 2 + 0].style.transform = 'translate(50px,-90px)';
// 			menuItem[i * 2 + 1].style.transform = 'translate(100px,0)';
// 			menuItemActiv = true;
// 			btn.classList.add('activLink');
// 		} else {
// 			menuItem.forEach((menuItem) => {
// 				menuItem.style.transform = 'translate(0,0)';
// 			});
// 			menuItemActiv = false;
// 			btn.classList.remove('activLink');
// 		}
// 	});
// });

// toogleBtn.forEach((btn, i) => {
// 	if (!menuItemActiv) {
// 		menuItem[i * 2 + 0].classList.add('up');
// 		menuItem[i * 2 + 1].classList.add('down');
// 		btn.classList.add('activLink');
// 	} else {
// 		menuItem[i * 2 + 0].classList.remove('up');
// 		menuItem[i * 2 + 1].classList.remove('down');
// 		btn.classList.remove('activLink');
// 	}

// 	menuItemActiv = !menuItemActiv;
// });

//let elem = document.querySelector('.www');

toogleBtn.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		
		switch (menuItemActiv) {
			case false:
				menuItem[i * 2 + 0].classList.toggle('up');
				menuItem[i * 2 + 1].classList.toggle('down');
				btn.classList.add('activLink');
				break;
			case true:
				menuItem[i * 2 + 0].classList.remove('up');
				menuItem[i * 2 + 1].classList.remove('down');
				btn.classList.remove('activLink');
				break;
		}

		menuItemActiv = !menuItemActiv;
	});
});



// function buttonClick() {
// 	toogleBtn.forEach((btn, i) => {
// 		switch (menuItemActiv) {
// 			case true:
// 				menuItem[i * 2 + 0].classList.add('up');
// 				menuItem[i * 2 + 1].classList.add('down');
// 				btn.classList.add('activLink');
// 				menuItemActiv = !menuItemActiv;
// 				break;
// 			case false:
// 				menuItem[i * 2 + 0].classList.remove('up');
// 				menuItem[i * 2 + 1].classList.remove('down');
// 				btn.classList.remove('activLink');
// 				menuItemActiv = !menuItemActiv;
// 				break;
// 		}
// 	});
// }

// function buttonClick() {
// 	toogleBtn.forEach((btn, i) => {
// 		menuItem[i * 2 + 0].classList.remove('up');
// 		menuItem[i * 2 + 1].classList.remove('down');
// 		btn.classList.remove('activLink');
// 	});
// }

// function buttonClick() {
// 	toogleBtn.forEach((btn, i) => {
// 		menuItem[i * 2 + 0].classList.remove('up');
// 		menuItem[i * 2 + 1].classList.remove('down');
// 		btn.classList.remove('activLink');
// 	});
// }

// toogleBtn.forEach((btn, i) => {
// 	btn.addEventListener('click', () => {
// 		// menuItem[i * 2 + 0].classList.add('dnone');
// 		// menuItem[i * 2 + 1].classList.add('dnone');
// 		// btn.classList.add('dnone');

// 		menuItem[i * 2 + 0].classList.remove('up');
// 		menuItem[i * 2 + 1].classList.remove('down');
// 		btn.classList.remove('activLink');
// 	});
// });

function MouseOver(elem) {
	// toogleBtn[0].classList.add('activLink');
	// menuItem[0].classList.add('up');
	// menuItem[1].classList.add('down');
	toogleBtn.forEach((btn, i) => {
		menuItem[i * 2 + 0].classList.add('up');
		menuItem[i * 2 + 1].classList.add('down');
		btn.classList.add('activLink');
	});
	// toogleBtn.forEach((btn, i) => {
	// 	btn.addEventListener('click', () => {
	// 		menuItem[i * 2 + 0].classList.add('up');
	// 		menuItem[i * 2 + 1].classList.add('down');
	// 		btn.classList.add('activLink');
	// 	});
	// });
}

function MouseOut(elem) {
	// toogleBtn[0].classList.remove('activLink');
	// menuItem[0].classList.remove('up');
	// menuItem[1].classList.remove('down');
	toogleBtn.forEach((btn, i) => {
		menuItem[i * 2 + 0].classList.remove('up');
		menuItem[i * 2 + 1].classList.remove('down');
		btn.classList.remove('activLink');
	});
	// toogleBtn.forEach((btn, i) => {
	// 	btn.addEventListener('click', () => {
	// 		menuItem[i * 2 + 0].classList.remove('up');
	// 		menuItem[i * 2 + 1].classList.remove('down');
	// 		btn.classList.remove('activLink');
	// 	});
	// });
}

// MouseOver(elem);
// MouseOut(elem);

//document.querySelector('.toogleBtn').addEventListener('click', foo);

// var bullet = document.querySelectorAll('.toogleBtn');

// for (var x in bullet) {
// 	bullet[x].onclick = function () {
// 		toogleBtn.classList.add('activLink');
// 	};
// }

// function foo() {
// 	if (!menuItemActiv) {
// 		document.querySelector('.toogleMenuLink a').classList.add('up');
// 		document.querySelector('.toogleMenuLink a + a').classList.add('down');
// 		toogleBtn.classList.add('activLink');
// 		menuItemActiv = true;
// 	} else {
// 		document.querySelector('.toogleMenuLink a').classList.remove('up');
// 		document.querySelector('.toogleMenuLink a + a').classList.remove('down');
// 		toogleBtn.classList.remove('activLink');
// 		menuItemActiv = false;
// 	}
// }
