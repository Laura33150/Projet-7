const express = require('express');
const router = express.Router();
const publicationCtrl = require('../controllers/publication');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');



router.post('/', auth, multer, publiCtrl.createPubli);
router.get('/', auth, publiCtrl.getAllPubli);
router.get('/:id', auth, publiCtrl.getOnePubli);
router.put('/:id', auth, multer, publiCtrl.modifyPubli);
router.delete('/:id', auth, publiCtrl.deletePubli);



module.exports = router;