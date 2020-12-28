  
const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin');
const admin = require('../middleware/admin');


router.get('/', admin, adminCtrl.getAllPubliAdmin);
router.get('/users', admin, adminCtrl.getAllUsersAdmin);






module.exports = router;