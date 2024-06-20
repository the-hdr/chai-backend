const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000


app.get ('/', (request, response) => {
    response.send ('lelo world!')
})

app.get ('/codeforces', (request, response) => {
    response.send ('DeathByFiringSquad')
})

app.get ('/atcoder', (request, response) => {
    response.send ('dth_by_frn_sqd')
})

app.get ('/codechef', (request, response) => {
    response.send ('dth_by_frn_sqd')
})



app.listen(process.env.PORT, () => {
    console.log ('yellow world!')
    console.log(`Example app listening on port ${process.env.PORT}`)
})