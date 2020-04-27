const BloodBank = require('../model/bloodBank')

module.exports.list = (req, res) => {
    BloodBank.find()
    .then((bank) => {
        if(bank){
            res.json(bank)
        }else {
            res.json({})
        }
    })
    .catch((err) => {

        console.log(err)
    })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    BloodBank.findById(id)
        .then((bank) => {
            if(bank){
                res.json(bank)
            }else {
                res.json({})
            } 
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const bloodBank = new BloodBank(body)
    bloodBank.save()
        .then((bank) => {
            if(bank){
                res.json(bank)
            }else {
                res.json({})
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const bank = req.body
    BloodBank.findByIdAndUpdate(id, bank, {new: true, runValidators: true})
        .then((bank) => {
            if(bank){
                res.json(bank)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.delete = (req, res) => {
    const id = req.params.id
    BloodBank.findByIdAndDelete(id)
    .then((bank) => {
        if(bank){
            res.json(bank)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        console.log(err)
    })
}