const User = require('../model/user')
const data = require('../../my-app/src/data')

module.exports.login = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const credential = data.data.find(hospital => hospital.includes(username))
    if(credential === undefined){
        res.json('Invalid Username')
    } else if(credential[0] === password){
        const user = new User({username, password})
        user.save()
        .then((user) => {
            if(user){
                return user.generateToken()
            } else {
                res.json({})
            }
        })
        .then(token => {
            res.setHeader('x-auth', token)
            res.send(token)
        })
    } else {
        res.json('invalid password')
    }
}