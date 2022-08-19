const express = require('express');
const auth = require('../middleware/auth');
//importe package mutler pour la gestion des img
const coeurCtrl = require('../controllers/coeur');

//fonction router d'express = permet la création de routes individuelles pour création de router
const router = express.Router();

router.post('/:postId', auth, coeurCtrl.like);


module.exports = router;