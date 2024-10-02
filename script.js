function validateRegistration() {
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        showError('nameError', 'Name is required.');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long.');
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age < 18 || age > 100) {
        showError('ageError', 'Age must be between 18 and 100.');
        isValid = false;
    }

    // Gender validation
    const genderChecked = document.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
        showError('genderError', 'Please select your gender.');
        isValid = false;
    }

    // Country validation
    const country = document.getElementById('country').value;
    if (!country) {
        showError('countryError', 'Please select a country.');
        isValid = false;
    }

    // Terms validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        showError('termsError', 'You must agree to the Terms and Conditions.');
        isValid = false;
    }

    return isValid;
}

function validateLogin() {
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Email validation for login
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(loginEmail)) {
        showError('loginEmailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Password validation for login
    const loginPassword = document.getElementById('loginPassword').value;
    if (loginPassword.length < 8) {
        showError('loginPasswordError', 'Password must be at least 8 characters long.');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => {
        element.textContent = '';
    });
}
