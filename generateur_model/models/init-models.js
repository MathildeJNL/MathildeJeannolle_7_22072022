var DataTypes = require("sequelize").DataTypes;
var _coeur = require("./coeur");
var _commentaire = require("./commentaire");
var _poste = require("./poste");
var _utilisateur = require("./utilisateur");

function initModels(sequelize) {
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

  return {
    coeur,
    commentaire,
    poste,
    utilisateur,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
