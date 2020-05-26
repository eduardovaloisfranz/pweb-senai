const Sequelize = require("sequelize");

const sequelize = new Sequelize("testesjavascript", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado ao banco");
  })
  .catch((err) => console.error(err));
