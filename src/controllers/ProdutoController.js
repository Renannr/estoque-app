const db = require('../models/index')

module.exports = {
  async index(req, res) {
    const produtos = await db.models.Produto.findAll();
    return res.json(produtos);
  },

  async store(req, res) {
    const { nome } = req.body;
    var productExists = await db.models.Produto.findOne({ where: {nome}});

    if (productExists) {
      return res.status(201).json(productExists);
    }

    const produto = await db.models.Produto.create(req.body)

    return res.json(produto);
  },

  async update(req, res) {
    const { nome } = req.body
    var produto = await db.models.Produto.update(req.body, { where: {nome}});

    return res.status(418).json(produto)
  },

  async delete(req, res) {
    const { nome } = req.body

    await db.models.Produto.destroy({ where: {nome}})
      .then(result => {
        return res.status(200).json(result);
      })
      .catch( err => {
        return res.status(500).json({"msg": "error"})
      });
  }
};
