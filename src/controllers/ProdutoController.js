const db = require('../models/index')

module.exports = {
  async index(req, res) {
    const produtos = await db.models.Produto.findAll();
    return res.json(produtos);
  },

  async store(req, res) {
    const { nome } = req.body;
    // const productExists = await db.models.Produto.findOne({ nome });

    // if (productExists) {
      
    //   return res.json(productExists);
    // }

    const produto = await db.models.Produto.create(req.body)

    return res.json(produto);
  }
};
