let password = document.querySelector("#user_password");
let confirmPassword = document.querySelector("#confirm_password");
let warning = document.querySelector("#password-check")

const validatePassword = () => {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        warning.textContent = "* Passwords don't match"
        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
    } else {
        confirmPassword.setCustomValidity('');
        warning.textContent = "";
        password.style.border = "1px solid rgba(94, 94, 94, 0.3)";
        confirmPassword.style.border = "1px solid rgba(94, 94, 94, 0.3)"
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;