const express = require('express');
const routes = require('./routes');
const models = require('./models');

const app = express();

const eraseDatabaseOnSync = false;

app.use((req, res, next) => {
  return next();
});

app.use(express.json());
app.use(routes);

models.sequelize.sync({ force: eraseDatabaseOnSync } )
  .then(async () => {
    await app.listen(process.env.PORT || 3333, () => {
      console.log("Server running..." )
      console.log("Erase dataBase on Sync: ", eraseDatabaseOnSync)
    });
  });
