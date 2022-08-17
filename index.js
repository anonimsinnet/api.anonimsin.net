const express = require('express')
const app = express()
app.use(expres.json())
app.route('/', (req, res) => res.json('hello world!'))

app.listen(0)
