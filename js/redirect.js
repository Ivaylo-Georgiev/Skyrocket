function redirectTo404() {
	const ADDRESS = "../html/404.html";
	location.href = ADDRESS;
}

document.querySelector("#register-button").addEventListener("click", redirectTo404);
