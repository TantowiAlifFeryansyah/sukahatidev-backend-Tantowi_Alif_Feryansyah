const express = require('express');
const router = express.Router();

const controller = require('../controller')

/* GET home page. */
router.post('/register', controller.register);



module.exports = router;
