/*
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page chargée.');

    // En résumerrr c'est Gestion des événements de clic sur les boutons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Bouton cliqué:', button.innerText);
        });
    });

    // Validation du formulaire d'inscription
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

    // Ca permet deee Validation du formulaire de connexion
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

    // C'estttt la Gestion du menu de navigation pour les petits écrans
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.toggle('is-active');
            }
        });
    }
    
    // C'estt la Fonctionnalité pour les liens de contact
    const emailButton = document.querySelector('button[onclick^="location.href=\'mailto:"]');
    const phoneButton = document.querySelector('button[onclick^="location.href=\'tel:"]');

    if (emailButton) {
        emailButton.addEventListener('click', () => {
            console.log('Envoi d\'un email...');
        });
    }

    if (phoneButton) {
        phoneButton.addEventListener('click', () => {
            console.log('Appel téléphonique...');
        });
    }

    // pERMET Gestion des commentaires
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', event => {
            const commentText = commentForm.querySelector('textarea[name="comment"]').value;
            if (commentText === '') {
                event.preventDefault();
                alert('Le commentaire ne peut pas être vide.');
            }
        });
    }

    // Notification en temps réel (simulée)
    const notificationButton = document.getElementById('notification-button');
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            alert('Vous avez une nouvelle notification.');
        });
    }
});

*/