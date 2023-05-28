const { User, Brand, Produk, Payment, Order } = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class Controller {
    static async register(req, res, next) {
        try {
            const { nama, userName, password, kota, telepon } = req.body
            const data = await User.create({ nama, userName, password, kota, telepon });
            res.status(201).json({ message: 'User successfully created', data })
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { userName, password } = req.body;
            const data = await User.findOne({ where: { userName: userName } });
            if (!data) {
                res.status(400).json({ message: 'Required Email or Password' })
            }
            const passCheck = bcrypt.compareSync(password, data.dataValues.password);
            if (data && passCheck) {
                delete data.dataValues.password
                const aksesToken = jwt.sign({ id: data.dataValues.id, user: data.dataValues.userName }, process.env.key)
                res.status(200).json({ message: 'User login successful', aksesToken })
            } else if (data && !passCheck) {
                res.status(401).json({ message: 'Invalid username or password' })
            } else {
                res.status(401).json({ message: 'Invalid username or password' })
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
            res.status(201).json({ message: 'Brand Brand successfully created', data })
        } catch (error) {
            next(error)
        }
    }

    static async produkCreate(req, res, next) {
        try {
            const { namaProduk, klasifikasi, tipe, satuan, konstanta, harga, BrandId } = req.body
            const data = await Produk.create({ namaProduk, klasifikasi, tipe, satuan, konstanta, harga, BrandId });
            res.status(201).json({ message: 'Produk successfully created', data })
        } catch (error) {
            next(error)
        }
    }

    static async orderCreate(req, res, next) {
        try {
            const { ProdukId, qty } = req.body
            const produkData = await Produk.findOne({ where: { id: ProdukId } });
            const harga = produkData.dataValues.harga
            const konstanta = produkData.dataValues.konstanta
            let temp = 0
            let jumlah = 0
            if (produkData.dataValues.klasifikasi) {
                temp = harga * qty * konstanta
                jumlah = Math.ceil(temp)
            } else {
                temp = harga * qty
                jumlah = Math.ceil(temp)
            }

            const order = await Order.create({ ProdukId, qty, jumlah });
            const { id } = req.user
            const status = 'unpaid'
            const payment = await Payment.create({totalHarga: jumlah, status, UserId: id, OrderId: order.id})
            
            const data = await Payment.findByPk(payment.dataValues.id, {include: Order})
            res.status(201).json({ message: 'Order & Payment successfully created', data })
        } catch (error) {
            next(error)
        }
    }

    static async paymentUpdate(req, res, next) {
        try {
            const { status } = req.body
            const { id } = req.user
            const data = await Payment.update({ status }, {
                where: {
                    UserId: id
                }
            });
            res.status(200).json({ message: 'Payment update successful', data })
        } catch (error) {
            next(error)
        }
    }


}

module.exports = Controller;