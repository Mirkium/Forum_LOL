const express = require('express');
const router = express.Router();
const controllers = require("../controller/controller.js");

router.get('/accueil', controllers.getAccueil);
router.get('/ranked', controllers.getRanked);
router.get('/draft', controllers.getDraft);
router.get('/login', controllers.getLogin);
router.get('/register', controllers.getRegister);
router.get('/profil', controllers.getProfil);
router.get('/liked', controllers.getLiked);