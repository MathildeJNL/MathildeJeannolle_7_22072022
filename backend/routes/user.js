const express = require('express');

//permet la création de routes individuelles
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordValidator = require('../middleware/password');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

//routes POST car frontend va également envoyer les infos (mail+mdp)
router.post('/signup',multer, passwordValidator,  userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', auth , userCtrl.deleteUser);
router.put('/:id', multer, auth , userCtrl.update);
router.put('/password/:id',passwordValidator, auth , userCtrl.updatePassword);
router.get('/', auth , userCtrl.profil);
router.get('/:id', auth , userCtrl.getUser);

module.exports = router;