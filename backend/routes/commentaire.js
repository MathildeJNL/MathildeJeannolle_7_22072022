const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/commentaire');

router.post('/:postId', auth, commentCtrl.sendCommentaire);
router.delete('/:id', auth, commentCtrl.deleteCommentaire);


module.exports = router;