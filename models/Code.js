const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Code extends Model {}

Code.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
        content: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   is: /^[0-9a-f]{1000}$/i
        // }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: "code",
    }
  );
  
  module.exports = Code;
  