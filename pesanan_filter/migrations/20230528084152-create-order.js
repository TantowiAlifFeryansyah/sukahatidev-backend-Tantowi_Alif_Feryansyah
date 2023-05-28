'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProdukId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Produks",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      qty: {
        type: Sequelize.INTEGER
      },
      jumlah: {
        type: Sequelize.INTEGER
      },
      PaymendId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Payments",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    await queryInterface.dropTable('Orders');
  }
};