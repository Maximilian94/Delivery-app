const express = require('express');

const router = express.Router();

const tokenValidController = require('../controllers/tokenValidController');
const salesController = require('../controllers/salesController');

router.post('/sale', tokenValidController.checkUser, salesController.create);
router.get('/sale', tokenValidController.checkUser, salesController.findAll);
router.get('/sale/:id', tokenValidController.checkUser, salesController.getById);
router.put('/sale/status', tokenValidController.checkUser, salesController.updateSaleStatus);

module.exports = router;
