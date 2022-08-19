const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    utilisateur_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profil_image: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    poste_occupe: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "utilisateur_AK"
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "utilisateur_id" },
        ]
      },
      {
        name: "utilisateur_AK",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
    ]
  });
};
