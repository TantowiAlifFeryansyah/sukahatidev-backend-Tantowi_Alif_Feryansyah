const {User} = require('../models')
class Controller {
    static async register(req, res, next) {
        try {
            const { nama, userName, password, kota, telepon} = req.body

            const data = await User.create({ nama, userName, password, kota, telepon});
            res.status(201).json({message:'User berhasil dibuat', data})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller;