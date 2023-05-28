const { User } = require('../models')
const bcrypt = require('bcryptjs');

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
                res.status(200).json({ message: 'User berhasil login', data })
            }else if (data && !passCheck) {
                res.status(400).json({ message: 'Username atau password salah' })
            }else {
                res.status(400).json({ message: 'Username atau password salah' })
            }            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller;