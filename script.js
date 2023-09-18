document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const zipcode = document.getElementById("zipcode");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");
    const submitButton = document.getElementById("submit-button");
    const successMessage = document.getElementById("success-message");

    function validateEmail() {
        const emailValue = email.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailValue)) {
            email.classList.add("invalid");
            document.getElementById("email-error").textContent = "Invalid email format";
            return false;
        } else {
            email.classList.remove("invalid");
            document.getElementById("email-error").textContent = "";
            return true;
        }
    }

    function validateCountry() {
        const countryValue = country.value;
        if (countryValue.trim() === "") {
            country.classList.add("invalid");
            document.getElementById("country-error").textContent = "Country is required";
            return false;
        } else {
            country.classList.remove("invalid");
            document.getElementById("country-error").textContent = "";
            return true;
        }
    }

    function validateZipcode() {
        const zipcodeValue = zipcode.value;
        const zipcodePattern = /^\d{5}$/;
        if (!zipcodePattern.test(zipcodeValue)) {
            zipcode.classList.add("invalid");
            document.getElementById("zipcode-error").textContent = "Invalid zipcode format";
            return false;
        } else {
            zipcode.classList.remove("invalid");
            document.getElementById("zipcode-error").textContent = "";
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = password.value;
        if (passwordValue.length < 8) {
            password.classList.add("invalid");
            document.getElementById("password-error").textContent = "Password must be at least 8 characters";
            return false;
        } else {
            password.classList.remove("invalid");
            document.getElementById("password-error").textContent = "";
            return true;
        }
    }

    function validatePasswordConfirmation() {
        const passwordValue = password.value;
        const passwordConfirmValue = passwordConfirm.value;
        if (passwordValue !== passwordConfirmValue) {
            passwordConfirm.classList.add("invalid");
            document.getElementById("password-confirm-error").textContent = "Passwords do not match";
            return false;
        } else {
            passwordConfirm.classList.remove("invalid");
            document.getElementById("password-confirm-error").textContent = "";
            return true;
        }
    }

    email.addEventListener("blur", validateEmail);
    country.addEventListener("blur", validateCountry);
    zipcode.addEventListener("blur", validateZipcode);
    password.addEventListener("blur", validatePassword);
    passwordConfirm.addEventListener("blur", validatePasswordConfirmation);

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Check all validations
        const isValidEmail = validateEmail();
        const isValidCountry = validateCountry();
        const isValidZipcode = validateZipcode();
        const isValidPassword = validatePassword();
        const isValidPasswordConfirmation = validatePasswordConfirmation();

        // Check if any validation failed
        if (isValidEmail && isValidCountry && isValidZipcode && isValidPassword && isValidPasswordConfirmation) {
            // All validations passed, show success message
            successMessage.classList.remove("hidden");
            form.reset(); // Clear the form
        } else {
            // Validation failed, show error message
            successMessage.classList.add("hidden");
        }
    });
});
