  
const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin');
const admin = require('../middlewares/admin');


router.get('/', admin, adminCtrl.getAllPublicationsAdmin);
router.get('/users', admin, adminCtrl.getAllUsersAdmin);






module.exports = router;