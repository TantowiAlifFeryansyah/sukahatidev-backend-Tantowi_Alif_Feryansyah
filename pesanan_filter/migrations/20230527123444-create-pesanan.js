'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pesanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pelangganId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pelanggans",
          key:"id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      brand: {
        type: Sequelize.STRING
      },
      produk: {
        type: Sequelize.STRING
      },
      klasifikasi: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.INTEGER
      },
      kuantitas: {
        type: Sequelize.INTEGER
      },
      statusPembayaran: {
        type: Sequelize.STRING
      },
      tanggalPesan: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pesanans');
  }
};