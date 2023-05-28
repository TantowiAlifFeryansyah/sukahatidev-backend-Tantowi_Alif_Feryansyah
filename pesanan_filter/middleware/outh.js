const { request } = require('express');
const jwt = require('jsonwebtoken');
const {User} = require('../models')

async function authentication(req, res, next){
    try {
        const {aksestoken} = req.headers
        // console.log('masuk', req.headers);
        // console.log(aksesToken);
        const payload = jwt.verify(aksestoken, process.env.key)
        const data = await User.findOne({where: {userName: payload.user}})
        req.user = {id: data.dataValues.id, userName: data.dataValues.userName}
        next()
        // console.log('ini data', data);
        // console.log('ini payload',payload);
    }
    catch(error) {
        next(error)
    }
}

module.exports = authentication;