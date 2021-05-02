const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../../../../E-Commerce/config/connection.js');

class Tag extends Model {}
// define columns
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primarykey:true,
      autoIncrement: true
    },
    tag_name: {
      type: dataType.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
