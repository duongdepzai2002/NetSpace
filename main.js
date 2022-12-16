const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuMobile.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuMobile.classList.remove('open');
		menuOpen = false;
	}
});
