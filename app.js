const express = require('express')
const postRouter = require('./routers/postRouter.js')

const app = express()

const port = 3000

app.use(express.json())

app.use(express.static('public'))

app.use('/', postRouter ) 




app.listen(port, ()=>{
    console.log('server della mia pasticceria')
})