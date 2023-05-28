'use strict';
const { hashSync } = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }Brand
  }
  User.init({
    nama: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    kota: DataTypes.STRING,
    telepon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  // use Hook for bycrypt password
  User.beforeCreate((user) => {
    const hash = hashSync(user.password, 10);
    user.password = hash
  })
  return User;
};