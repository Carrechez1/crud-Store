const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Store = db.define("store", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  isAvaible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
module.exports = Store;
