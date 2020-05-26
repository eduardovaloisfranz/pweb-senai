const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = new Sequelize("testesjavascript", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

class Usuario extends Model {}

Usuario.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    idade: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "usuario",
  }
);

//add user!

// Usuario.sync({ force: false }).then(() => {
//   return Usuario.create({
//     nome: "Eduardo",
//     idade: 20,
//   });
// });

Usuario.findAll().then((usuarios) => {
  console.log("Todos os usuarios " + JSON.stringify(usuarios, null, 4));
});

Usuario.create({
  nome: "EduardoJooj",
  idade: 30,
}).then((res) => console.log("Id gerado " + res.id));

Usuario.destroy({
  where: {
    id: 3,
  },
})
  .then(() => console.log("Apagado com sucesso"))
  .catch((err) => console.log("Problema: " + err));

Usuario.update(
  { nome: "Cleyton" },
  {
    where: {
      id: 1,
    },
  }
).then(() => console.log("Registro Alterado com sucesso"));
