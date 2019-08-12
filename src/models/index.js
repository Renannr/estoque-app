const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE ||  "estoque-app",
  process.env.DATABASE_USER || "postgres",
  process.env.DATABASE_PASSWORD || "batata",
  {
    dialect: 'postgres',
  },
);

const models = {
    Produto: sequelize.import('./Produto'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.models = models

module.exports = db;