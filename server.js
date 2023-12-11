/*
=========REQUIRED DEPENDECIES===========
*/
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

//declare the db variable
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'star-wars-quotes'

//connecting to the MONGO database
MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

/*
========MADDLEWARE==========
*/    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/*
==============ROUTES==========
*/ 

app.get('/', (req, res)=>{
    db.collection('taxi-rank-info').find().toArray()
        .then(data =>{
            let nameList = data.map(item => item.specialName)
            console.log(nameList)
            res.render('index.ejs', {info: nameList})
        })
        .catch(error => console.error(error))
})

app.post('/api', (req, res) => {
    console.log('post success')
    db.collection('taxi-rank-info').insertOne(
        req.body
    )
        .then(result=>{
            console.log(result)
            res.redirect('/')
        })
        .catch(error => console.error(error))
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})