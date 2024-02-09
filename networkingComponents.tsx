document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    const backButton = document.getElementById('back');

    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const backToLoginButton = document.getElementById('back-to-login');

    if (backToLoginButton) {
        backToLoginButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
});