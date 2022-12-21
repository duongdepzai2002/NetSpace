const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const loginBtn = document.querySelector('.login');
const logoutBtn = document.querySelector('.logout');
const userTitle = document.querySelector('.user-title');
const user = document.querySelector('.user');
let isLogin = localStorage.getItem('isLogin');
let userNamePass = localStorage.getItem('userNamePass');

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

if (isLogin) {
	loginBtn.classList.remove('active');
	logoutBtn.classList.add('active');
	userTitle.innerHTML = 'Welcome ' + userNamePass;
} else if (isLogin == null) {
	loginBtn.classList.add('active');
	logoutBtn.classList.remove('active');
	user.classList.remove('active');
}

logoutBtn.addEventListener('click', logout);
function logout() {
	localStorage.removeItem('isLogin');
	window.location.reload();
}
