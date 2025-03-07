const express = require('express')
const route = express.Router();
const {Login } = require('../controllers/userController')
route.post('/login', Login)
module.exports = route