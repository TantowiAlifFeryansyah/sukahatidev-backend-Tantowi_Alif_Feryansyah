const { User, Brand, Produk, Payment, Order } = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class Controller {
    static async register(req, res, next) {
        try {
            const { nama, userName, password, kota, telepon } = req.body
            const data = await User.create({ nama, userName, password, kota, telepon });
            res.status(201).json({ message: 'User berhasil dibuat', data })
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { userName, password } = req.body;
            console.log('ini req', req);
            const data = await User.findOne({ where: { userName: userName } });
            if (!data) {
                res.status(400).json({ message: 'Username atau password salah' })
            }
            const passCheck = bcrypt.compareSync(password, data.dataValues.password);
            if (data && passCheck) {
                delete data.dataValues.password
                console.log(process.env.key);
                const aksesToken = jwt.sign({ id: data.dataValues.id, user: data.dataValues.userName }, process.env.key)
                res.status(200).json({ message: 'User berhasil login', aksesToken })
            } else if (data && !passCheck) {
                res.status(400).json({ message: 'Username atau password salah' })
            } else {
                res.status(400).json({ message: 'Username atau password salah' })
            }
        } catch (error) {
            next(error)
        }
    }

    static async brandCreate(req, res, next) {
        try {
            const { namaBrand } = req.body
            const { id } = req.user
            const data = await Brand.create({ namaBrand, UserID: id });
            res.status(201).json({ message: 'Brand berhasil dibuat', data })
        } catch (error) {
            next(error)
        }
    }

    static async produkCreate(req, res, next) {
        try {
            const { namaProduk, klasifikasi, tipe, satuan, konstanta, harga, BrandId } = req.body
            const data = await Produk.create({ namaProduk, klasifikasi, tipe, satuan, konstanta, harga, BrandId });
            res.status(201).json({ message: 'Produk berhasil dibuat', data })
        } catch (error) {
            console.log('ini error', error);
            next(error)
        }
    }

    // static async paymentCreate(req, res, next) {
    //     try {
    //         const { totalHarga, status } = req.body
    //         const { id } = req.user
    //         const data = await Payment.create({ totalHarga, status, UserId: id });
    //         res.status(201).json({ message: 'Payment berhasil dibuat', data })
    //     } catch (error) {
    //         console.log('ini error', error);
    //         next(error)
    //     }
    // }

    static async orderCreate(req, res, next) {
        try {
            const { ProdukId, qty } = req.body
            const produkData = await Produk.findOne({ where: { id: ProdukId } });
            // console.log('ini produkData', produkData);
            const harga = produkData.dataValues.harga
            const konstanta = produkData.dataValues.konstanta
            let temp = 0
            let jumlah = 0
            if (produkData.dataValues.klasifikasi) {
                temp = harga * qty * konstanta
                jumlah = Math.ceil(temp)
                // console.log('ini jumlah ada', jumlah);
            } else {
                temp = harga * qty
                jumlah = Math.ceil(temp)
                // console.log('ini jumlah ga ada', jumlah);
            }
            console.log('ini adalah', jumlah);

            const data = await Order.create({ ProdukId, qty, jumlah });

            

            console.log('ini data', data);
            res.status(201).json({ message: 'Order berhasil dibuat', data })
        } catch (error) {
            console.log('ini error ==============================================');
            console.log(error);
            next(error)
        }
    }

    static async paymentUpdate(req, res, next) {
        try {
            const { status } = req.body
            console.log('ini id', status);
            const { id } = req.user
            const data = await Payment.update({ status }, {
                where: {
                    UserId: id
                }
            });
            res.status(201).json({ message: 'Payment Status berhasil diupdate', data })
        } catch (error) {
            console.log('ini error', error);
            next(error)
        }
    }


}

module.exports = Controller;