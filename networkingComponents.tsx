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
            window.location.href = 'welcome.html';
        });
    }


});