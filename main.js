const express = require('express')
const app = express()

app.use(express.static('public'))

const port = process.env.PORT || 3000

app.set('view-engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render(`${__dirname}/views/prontuary.ejs`)
})

app.listen(port)