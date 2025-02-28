const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send({message: 'test'});
})

app.listen(port, () => {
    console.log(`Service listening on port ${port}`)
})