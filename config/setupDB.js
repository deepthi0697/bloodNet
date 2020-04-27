const mongoose = require('mongoose')

const setupDb = () => {
    return mongoose.connect('mongodb+srv://deepthi:shaz7022@cluster0-7uxoi.mongodb.net/BloodNet?retryWrites=true&w=majority', { useUnifiedTopology: true,  useNewUrlParser: true  })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = setupDb