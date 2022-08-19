//importe package
const express = require('express');
const auth = require('../middleware/auth');
//importe package mutler pour la gestion des img
const multer = require('../middleware/multer-config');
const posteCtrl = require('../controllers/poste');

//fonction router d'express = permet la création de routes individuelles pour création de router
const router = express.Router();

router.post('/', multer, auth, posteCtrl.postArticle);
router.get('/', auth, posteCtrl.getAll);
router.get('/:id', auth, posteCtrl.getOne);
router.delete('/:id', auth, posteCtrl.delete);
router.put('/:id',multer, auth, posteCtrl.update);

module.exports = router;