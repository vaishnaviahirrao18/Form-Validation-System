document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let valid = true;

        // Full Name Validation
        if (fullName.value.length < 5) {
            document.getElementById('nameError').textContent = 'Name must not be less than 5 characters';
            valid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        // Email Validation
        if (!email.value.includes('@')) {
            document.getElementById('emailError').textContent = 'Enter a correct email';
            valid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Phone Number Validation
        const phoneNumber = phone.value;
        if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
            valid = false;
        } else {
            document.getElementById('phoneError').textContent = '';
        }

        // Password Validation
        const passwordValue = password.value;
        const nameValue = fullName.value.toLowerCase();
        if (passwordValue.length < 8 || passwordValue === 'password' || passwordValue === nameValue) {
            document.getElementById('passwordError').textContent = 'Password is not strong';
            valid = false;
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        // Confirm Password Validation
        if (passwordValue !== confirmPassword.value) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            valid = false;
        } else {
            document.getElementById('confirmPasswordError').textContent = '';
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
