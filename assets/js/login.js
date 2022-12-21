//
//
//
//

function app() {
	const linkSignUp = document.querySelector('.form-swap--signup');
	const linkLogin = document.querySelector('.form-swap--login');
	const formSignup = document.querySelector('.form-signup');
	const formLogin = document.querySelector('.form-login');
	linkSignUp.addEventListener('click', swapToSignup);
	linkLogin.addEventListener('click', swapToLogin);
	formSignup.addEventListener('submit', signup);
	formLogin.addEventListener('submit', signin);
	const json = localStorage.getItem('listUser');
	const data = JSON.parse(json);
	const loginUserName = document.querySelector('.login-user-name');

	function swapToSignup() {
		formLogin.classList.remove('active');
		formSignup.classList.add('active');
	}

	function swapToLogin() {
		formLogin.classList.add('active');
		formSignup.classList.remove('active');
	}

	function signup() {
		const email = document.querySelector('.email').value;
		const userName = document.querySelector('.user-name').value;
		const password = document.querySelector('.password').value;
		const confirmPassword = document.querySelector('.confirm-password').value;

		let listUser = localStorage.getItem('listUser') ? JSON.parse(localStorage.getItem('listUser')) : [];
		listUser.push({
			email: email,
			userName: userName,
			password: password,
			confirmPassword: confirmPassword,
		});
		localStorage.setItem('listUser', JSON.stringify(listUser));
		alert('Đăng kí tài khoản thành công, chuyển hướng đến trang đăng nhập');
	}

	function signin() {
		const userNameValue = document.querySelector('.login-user-name').value;
		const passwordValue = document.querySelector('.login-password').value;
		// data.map((value) => {
		// 	if (userNameValue == value.userName && passwordValue == value.password) {
		// 		alert('Đăng nhập thành công');
		// 		window.open('./index.html');
		// 	} else {
		// 		alert('Vui lòng nhập đúng thông tin tài khoản');
		// 	}
		// });
		var check = false;
		for (var i = 0; i < data.length; i++) {
			if (userNameValue == data[i].userName && passwordValue == data[i].password) {
				check = true;
			}
		}
		if (check == true) {
			alert('Đăng nhập thành công');
			window.open('./index.html', '_blank');
			localStorage.setItem('isLogin', 'true');
			localStorage.setItem('userNamePass', userNameValue);
		} else {
			alert('Vui lòng nhập đúng thông tin tài khoản');
		}
	}
}

app();
