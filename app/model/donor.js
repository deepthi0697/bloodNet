const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 65
    },
    group: {
        type: String,
        required: true
    },
    state : {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    h_name: {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now(),
        required: true
    }
})

const Donor = mongoose.model('Donor', donorSchema)

module.exports = Donor