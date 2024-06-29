const express = require('express');
const router = express.Router();
const controllers = require("../controller/controller.js");

router.get('/accueil', controllers.getAccueil);
router.get('/login', controllers.getLogin);
router.get('/register', controllers.getRegister);
router.get('/profil', controllers.getProfil);
router.get('/salon/game', controllers.getGame);
router.get('/salon/update', controllers.getUpdate);
router.get('/salon/esport', controllers.getEsport);
router.get('/', controllers.getError);


module.exports = router;