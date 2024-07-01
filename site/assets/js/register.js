document.addEventListener('DOMContentLoaded', () => {
    console.log('Page d\'inscription chargée.');

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', event => {
            const password = registerForm.querySelector('input[name="password"]').value;
            if (password.length < 6) {
                event.preventDefault();
                alert('Le mot de passe doit contenir au moins 6 caractères.');
            }
        });
    }
});
