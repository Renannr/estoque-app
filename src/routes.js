const express = require('express');
const ProdutoController = require('./controllers/ProdutoController');


const routes = express.Router();

routes
    .get('/produtos', ProdutoController.index)
    .post('/produtos', ProdutoController.store);

module.exports = routes;
