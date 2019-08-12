const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Produto = sequelize.define('Produto', {
    nome: {
      type: Sequelize.STRING(255),
      allowNull: false,
      notEmpty: true,
    },
    observacao: {
      type: Sequelize.STRING(255),
      allowNull: true,
      notEmpty: false,
    },
    val_ate: {
      type: Sequelize.DATE,
      allowNull: true,
      notEmpty: false,
    },
    qnt_anterior: {
      type: Sequelize.DECIMAL(20,2),
      allowNull: true,
      notEmpty: false,
    },
    qnt_entrada: {
      type: Sequelize.DECIMAL(20,2),
      allowNull: true,
      notEmpty: false,
    },
    qnt_saida: {
      type: Sequelize.DECIMAL(20,2),
      allowNull: true,
      notEmpty: false,
    },
    qnt_saldo: {
      type: Sequelize.DECIMAL(20,2),
      allowNull: true,
      notEmpty: false,
    }
  }, {
    paranoid: true // Opção paranóico para não haver remoção física do registro
  });

  return Produto;
}