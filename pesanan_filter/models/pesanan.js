'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pesanan.init({
    pelangganId: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    produk: DataTypes.STRING,
    klasifikasi: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kuantitas: DataTypes.INTEGER,
    statusPembayaran: DataTypes.STRING,
    tanggalPesan: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pesanan',
  });
  return Pesanan;
};