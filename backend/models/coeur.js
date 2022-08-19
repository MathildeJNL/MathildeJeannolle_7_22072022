const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coeur', {
    coeur_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    utilisateur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'utilisateur_id'
      },
      onDelete: 'CASCADE',
    },
    poste_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'poste',
        key: 'poste_id'
      },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    tableName: 'coeur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coeur_id" },
        ]
      },
      {
        name: "coeur_utilisateur_FK",
        using: "BTREE",
        fields: [
          { name: "utilisateur_id" },
        ]
      },
      {
        name: "coeur_poste0_FK",
        using: "BTREE",
        fields: [
          { name: "poste_id" },
        ]
      },
    ]
  });
};
