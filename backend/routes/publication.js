const express = require('express');
const router = express.Router();
const publicationCtrl = require('../controllers/publication');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');



/*router.post('/', auth, multer, publicationCtrl.createPublication);*/
router.get('/', auth, publicationCtrl.getAllPublications);
router.get('/:id', auth, publicationCtrl.getOnePublication);
router.put('/:id', auth, multer, publicationCtrl.modifyPublication);
router.delete('/:id', auth, publicationCtrl.deletePublication);



module.exports = router;