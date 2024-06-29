

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

    res.render('profil');
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