const express = require('express');
const router = express.Router();
const controllers = require("../controller/controller.js");

router.get('/accueil', controllers.getAccueil);
router.get('/login', controllers.getLogin);
router.post('/login', controllers.postLogin); 
router.get('/register', controllers.getRegister);
router.post('/register', controllers.postRegister); 
router.get('/profil', controllers.getProfil);
router.get('/logout', controllers.logout); 
router.get('/salon/game', controllers.getGame);
router.get('/salon/update', controllers.getUpdate);
router.get('/salon/esport', controllers.getEsport);
router.get('/message', controllers.getMessage);
router.get('/post', controllers.getPost)
router.get('/', controllers.getError);

module.exports = router;


