const users = []; // Utiliser une base de données pour gérer les utilisateurs en production

// Middleware pour vérifier si l'utilisateur est authentifié
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
}

exports.getAccueil = async (req, res) => {
    res.render('accueil');
};

exports.getLogin = async (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect('/profil');
    } else {
        res.redirect('/login');
    }
};

exports.getRegister = async (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const user = { username: name, email: email, password: password, bio: 'Ceci est une bio exemple.' };
    await fetch(`localhost:8080/CreateUser/${user.username}/${user.email}/${user.pwd}`)
    .then(async response => {
        return await response;
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'error while posting post.'
        });
    });
    users.push(user);
    req.session.user = user;
    res.redirect('/profil');
};

exports.getProfil = async (req, res) => {
    if (!req.session.user) {
        res.render('profil', { user: null });
    } else {
        res.render('profil', { user: req.session.user });
    }
};

exports.logout = async (req, res) => {
    req.session.destroy();
    res.redirect('/login');
};

exports.getGame = async (req, res) => {
    res.render('game');
};

exports.getUpdate = async (req, res) => {
    res.render('update');
};

exports.getEsport = async (req, res) => {
    res.render('esport');
};

exports.getMessage = async (req, res) => {
    res.render('message');
};

exports.getPost = async (req, res) => {
    res.render('post')
}

exports.getError = async (req, res) => {
    res.render('error');
};

exports.goToPost = async (req, res) => {
    res.render('post');
}

module.exports.isAuthenticated = isAuthenticated;