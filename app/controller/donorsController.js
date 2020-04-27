const Donor = require('../model/donor')

module.exports.list = (req, res) => {
    Donor.find()
    .then((donor) => {
        if(donor){
            res.json(donor)
        }else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Donor.findById(id)
    .then((donor) => {
        if(donor){
            res.json(donor)
        }else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = (req, res) => {
    const body = req.body
    const donor = new Donor(body)
    donor.save()
    .then((donor) => {
        if(donor){
            res.json(donor)
        }else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Donor.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then((donor) => {
        if(donor){
            res.json(donor)
        }else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.delete = (req, res) => {
    const id = req.params.id
    Donor.findByIdAndDelete(id)
    .then((donor) => {
        if(donor){
            res.json(donor)
        }else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}