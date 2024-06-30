document.addEventListener('DOMContentLoaded', () => {
    console.log('Page de connexion chargée.');

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', event => {
            const email = loginForm.querySelector('input[name="email"]').value;
            const password = loginForm.querySelector('input[name="password"]').value;
            if (email === '' || password === '') {
                event.preventDefault();
                alert('Veuillez remplir tous les champs.');
            }
        });
    }
});
