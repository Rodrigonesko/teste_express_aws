const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        msg: 'teste'
    })
})

app.listen(3333)