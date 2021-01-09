const express = require('express')
const app = express()
const port = process.env.PORT || 80

var cors = require('cors')

app.use(cors())

app.get('', (req, res) => {
    var today = new Date()

    res.send(today)

})

app.listen(port)