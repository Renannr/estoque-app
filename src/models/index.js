const Sequelize = require('sequelize');

//postgres://eptqwqamupzgip:34ca477dec8521cf167a652c86abf25ebfaf8532be33140106a8950122e0ac8f@ec2-174-129-227-146.compute-1.amazonaws.com:5432/df8b0pr571m5h2


const sequelize = new Sequelize( process.env.DB_URL ||
  "estoque-app",
  "postgres",
  "batata",
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