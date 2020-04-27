const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bloodBankSchema = new Schema({
    group: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    isAvailable: {
        type: String,
        required: true
    },
    isEditable: {
        type: Boolean,
        default: false,
        required: true
    }
})

const BloodBank = mongoose.model('BloodBank', bloodBankSchema)

module.exports = BloodBank