const express = require('express')
const app = express()
const port = 3033
const setupDB = require('./config/setupDB')
const Routes = require('./config/router')
const cors = require('cors')


setupDB()

app.use(cors())
app.use(express.json())
app.use('/', Routes)

app.get('/', (req, res) => {
    res.json({text: 'Welcome to the website'})
})

app.listen(port, ()=> {
    console.log('listening on ',port)
})


