const express = require('express');

const router = express.Router();

const tokenValidController = require('../controllers/tokenValidController');
const salesController = require('../controllers/salesController');

console.log('Entrou no sale');

router.post('/', tokenValidController.checkUser, salesController.create);
router.get('/costumer-orders', tokenValidController.checkUser, salesController.getCostumerOrders);
router.get('/seller-orders', tokenValidController.checkUser, salesController.getSellerOrders);
router.get('/', tokenValidController.checkUser, salesController.findAll);
router.get('/:id', tokenValidController.checkUser, salesController.getById);
router.put('/status', tokenValidController.checkUser, salesController.updateSaleStatus);

module.exports = router;
