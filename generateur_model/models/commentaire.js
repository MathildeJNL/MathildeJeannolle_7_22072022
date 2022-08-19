const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commentaire', {
    commentaires_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    texte_commentaire: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: false
    },
    poste_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'poste',
        key: 'poste_id'
      }
    },
    utilisateur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'utilisateur_id'
      }
    }
  }, {
    sequelize,
    tableName: 'commentaire',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "commentaires_id" },
        ]
      },
      {
        name: "commentaire_poste_FK",
        using: "BTREE",
        fields: [
          { name: "poste_id" },
        ]
      },
      {
        name: "commentaire_utilisateur0_FK",
        using: "BTREE",
        fields: [
          { name: "utilisateur_id" },
        ]
      },
    ]
  });
};
