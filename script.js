const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Reset errors
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Check username
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        return;
    }

    // Check password
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        return;
    }

    // If all validations pass, simulate login (replace with actual API call)
    simulateLogin(usernameInput.value, passwordInput.value);
}

function simulateLogin(username, password) {
    // Replace with actual API call to validate username and password
    // For demonstration, just log the credentials
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear form inputs after successful login simulation
    usernameInput.value = '';
    passwordInput.value = '';
}
