'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Produks', [
      {
        namaProduk: "Karkas",
        klasifikasi: "1.2 - 1.5",
        tipe: "Ayam Utuh",
        satuan: "Ekor",
        konstanta: 1.5,
        harga: 40500,
        BrandId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaProduk: "Ati Ampela",
        klasifikasi: "Bersih",
        tipe: "Ekses",
        satuan: "pcs",
        konstanta: 0.2,
        harga: 22500,
        BrandId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaProduk: "Ati Ampela",
        klasifikasi: "Kotor",
        tipe: "Ekses",
        satuan: "pcs",
        konstanta: 0.2,
        harga: 21500,
        BrandId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaProduk: "Boneless",
        klasifikasi: "Dada",
        tipe: "Ayam Parting",
        satuan: "kg",
        konstanta: null,
        harga: 53500,
        BrandId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaProduk: "Boneless",
        klasifikasi: "Paha",
        tipe: "Ayam Parting",
        satuan: "kg",
        konstanta: null,
        harga: 51500,
        BrandId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaProduk: "Paha Utuh",
        klasifikasi: "",
        tipe: "Ayam Parting",
        satuan: "kg",
        konstanta: null,
        harga: 43100,
        BrandId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Produks', null, {});
  }
};
