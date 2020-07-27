const express = require('express');
const router = express.Router();
const path = require('path');
const controllersWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersWeb'));


//Rutas
router.get('/', controllersWeb.index);
router.get('/categorias', controllersWeb.category);
router.get('/categorias/?:id', controllersWeb.category);
router.get('/error', controllersWeb.error);
router.get('/login', controllersWeb.login);
router.get('/register', controllersWeb.register);


module.exports = router;