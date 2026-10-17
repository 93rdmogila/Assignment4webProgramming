const form = document.getElementById("registration-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const result = document.getElementById("form-result");
function checkPasswordMatch() {
	if (confirmPassword.value === password.value) {
		confirmPassword.setCustomValidity("");
	} else {
		confirmPassword.setCustomValidity("Passwords must match.");
	}
}
password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);
form.addEventListener("submit", function (event) {
	event.preventDefault();
	checkPasswordMatch();
	form.classList.add("was-validated");
	result.classList.toggle("d-none", !form.checkValidity());
});
form.addEventListener("reset", function () {
	form.classList.remove("was-validated");
	confirmPassword.setCustomValidity("");
	result.classList.add("d-none");
});
