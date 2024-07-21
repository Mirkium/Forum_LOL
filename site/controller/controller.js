const users = [];

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
    await fetch(`http://localhost:8080/CreateUser/${user.username}/${user.email}/${user.pwd}`)
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
    console.log("Game")
    let posts;
    await fetch('http://localhost:8080/posts/1')
    .then(async response => {
        console.log("Response : ", response);
        posts = await response.posts;
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'internal server error.'
        });
    });
    res.render('game',{ posts });
};

exports.getUpdate = async (req, res) => {
    let posts;
    await fetch('http://localhost:8080/posts/2')
    .then(async response => {
        posts = await response.posts;
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'internal server error.'
        });
    });
    res.render('update', { posts });
};

exports.getEsport = async (req, res) => {
    let posts;
    await fetch('http://localhost:8080/posts/3')
    .then(async response => {
        posts = await response.posts;
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'internal server error.'
        });
    });
    res.render('esport',{ posts });
};

exports.getPost = async (req, res) => {
    let posts;
    fetch('http://localhost:8080/posts')
    .then( async response => {
        posts = await response.posts;
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'internal server error.'
        });
    });
    res.render('post', {posts});
}

exports.getError = async (req, res) => {
    res.render('error');
};

exports.goToPost = async (req, res) => {
    const PostId = req.params.id;
    let posts;
    await fetch(`http://localhost:8080/post/${PostId}`)
    .then(async response => {
        posts = await response.post;
    })
    .catch(err => {
        res.redirect('/');
    });
    let messages = [];
    await fetch(`http://localhost:8080/messages/${PostId}`)
    .then(async response => {
        await response.messages.forEach(message => {
            messages.push(message);
        });
    })
    res.render('post', {posts, messages});
}

exports.getUser = async (req, res) => {
    const UserId = req.params.id;
    try {
        let userInfo;
        await fetch(`http://localhost:8080/User/${UserId}`)
        .then( async response => {
            return await response;
        })
        .then(async data => {
            userInfo = data.user;
        })
        .catch(err => {
            console.log(err);
            res.redirect('/user');
        });
        res.render('profil', userInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

module.exports.isAuthenticated = isAuthenticated;