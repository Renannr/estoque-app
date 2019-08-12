const express = require('express');
const ProdutoController = require('./controllers/ProdutoController');


const routes = express.Router();

routes
    .get('/produtos', ProdutoController.index)
    .post('/produtos', ProdutoController.store)
    .put('/produtos', ProdutoController.update)
    .delete('/produtos', ProdutoController.delete);

module.exports = routes;
