const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControlers')

router.get('/', mainControllers.home);

module.exports = router