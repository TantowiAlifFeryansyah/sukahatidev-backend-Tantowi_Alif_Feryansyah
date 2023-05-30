const { request } = require('express');
const jwt = require('jsonwebtoken');
const {User} = require('../models')

async function authentication(req, res, next){
    try {
        const {aksestoken} = req.headers
        const payload = jwt.verify(aksestoken, process.env.key)
        const data = await User.findOne({where: {userName: payload.user}})
        req.user = {id: data.dataValues.id, userName: data.dataValues.userName}
        next()
    }
    catch(error) {
        next(error)
    }
}

module.exports = authentication;