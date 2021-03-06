const Sequelize = require('sequelize');

if(process.env.DATABASE_URL){
  sequelize = new Sequelize(process.env.DATABASE_URL);
}
else{
  var env = require('../../.env');
  sequelize = new Sequelize(
    env.DB_DATABASE,
    env.DB_USER,
    env.DB_PASSWORD,
    {
      dialect: 'postgres',
    },
  );
}

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