const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.commentaire = require("./commentaire.js")(sequelize, Sequelize);
// db.poste = require("./poste.js")(sequelize, Sequelize);
// db.utilisateur = require("./utilisateur.js")(sequelize, Sequelize);

///////////////////////// INITIALISATION DES MODELS (effet cascade) ///////////////////////////////////

var DataTypes = require("sequelize").DataTypes;
var _coeur = require("./coeur");
var _commentaire = require("./commentaire");
var _poste = require("./poste");
var _utilisateur = require("./utilisateur");

var coeur = _coeur(sequelize, DataTypes);
var commentaire = _commentaire(sequelize, DataTypes);
var poste = _poste(sequelize, DataTypes);
var utilisateur = _utilisateur(sequelize, DataTypes);

coeur.belongsTo(poste, { as: "poste", foreignKey: "poste_id"});
poste.hasMany(coeur, { as: "coeurs", foreignKey: "poste_id"});
commentaire.belongsTo(poste, { as: "poste", foreignKey: "poste_id"});
poste.hasMany(commentaire, { as: "commentaires", foreignKey: "poste_id"});
coeur.belongsTo(utilisateur, { as: "utilisateur", foreignKey: "utilisateur_id"});
utilisateur.hasMany(coeur, { as: "coeurs", foreignKey: "utilisateur_id"});
commentaire.belongsTo(utilisateur, { as: "utilisateur", foreignKey: "utilisateur_id"});
utilisateur.hasMany(commentaire, { as: "commentaires", foreignKey: "utilisateur_id"});
poste.belongsTo(utilisateur, { as: "utilisateur", foreignKey: "utilisateur_id"});
utilisateur.hasMany(poste, { as: "postes", foreignKey: "utilisateur_id"});

db.poste = poste;
db.commentaire = commentaire;
db.utilisateur = utilisateur;
db.coeur = coeur;

module.exports = db;