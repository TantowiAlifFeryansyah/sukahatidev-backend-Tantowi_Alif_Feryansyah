const { User, Brand, Produk } = require('../models')
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
            res.status(201).json({ message: 'Brand  berhasil dibuat', data })
        } catch (error) {
            next(error)
        }
    }

    static async produkCreate(req, res, next) {
        try {
            const { namaProduk, klasifikasi, tipe, satuan, konstanta, harga, BrandId } = req.body
            const data = await Produk.create({ namaProduk, klasifikasi, tipe, satuan, konstanta, harga, BrandId });
            res.status(201).json({ message: 'Produk  berhasil dibuat', data })
        } catch (error) {
            console.log('ini error', error);
            next(error)
        }
    }

}

module.exports = Controller;