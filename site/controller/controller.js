exports.getAccueil = async (req, res) => {
    res.render('accueil');
};

exports.getLogin = async (req, res) => {
    res.render('login');
};

exports.getRegister = async (req, res) => {
    res.render('register');
};

exports.getProfil = async (req, res) => {
    // sinon ca fonctionne pas pour le profil c'etait obvious as fuck 
    const user = {
        username: 'exemple_user',
        email: 'exemple_user@example.com',
        createdAt: new Date(),
        bio: 'Ceci est une bio exemple.'
    };

    res.render('profil', { 
        title: 'Profil',
        user: user
    });
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

exports.getError = async (req, res) => {
    res.render('error');
};
