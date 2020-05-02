const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens : [{
        token : {
            type: String
        },
        createdAt : {
            type: Date,
            default : Date.now()
        }
    }]
})

userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        _id: user._id,
        name: user.username,
        createdAt: Number(Date.now()) 
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({token: token})

    return user.save()
    .then((user) => {
        return Promise.resolve(token)
    })
    .catch((err) => {
        return Promise.reject(err)
    })
}

userSchema.statics.findByTokens = function(token){
    const User = this
    let tokenData
    try {
        tokenData = jwt.verify(token, 'jwt@123')
    } catch (err){
        return Promise.reject(err)
    }
    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
    .then((user) => {
        return Promise.resolve(user)
    })
    .catch((err) => {
        return Promise.resolve(err)
    })
}

const User = mongoose.model('User', userSchema)
module.exports = User