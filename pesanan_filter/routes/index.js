const express = require('express');
const router = express.Router();
const authentication = require('../middleware/outh')

const controller = require('../controller')

/* GET home page. */
router.post('/register', controller.register);
router.post('/login', controller.login);
router.use(authentication)
router.post('/brandCreate', controller.brandCreate);
router.post('/produkCreate', controller.produkCreate);
// router.post('/paymentCreate', controller.paymentCreate);
router.post('/orderCreate', controller.orderCreate);
router.patch('/paymentUpdate', controller.paymentUpdate);

module.exports = router;
