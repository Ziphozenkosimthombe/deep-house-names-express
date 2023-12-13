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

app.get('/', async (req, res)=>{
    try{
        const data = await db.collection('quotes').find().sort({number: 1}).toArray()
        // let nameList = await data.map(item => item.specialName)
        console.log(data)
        res.render('index.ejs', {info: data})
    }catch(error){
        console.log(error)

    }
})
    
app.post('/api', async (req, res) => {
    try{
        console.log('post success')
        const result = await db.collection('quotes').insertOne({
            specialName: req.body.specialName,
            placeToDeliver: req.body.placeToDeliver,
            numberPlate: req.body.numberPlate,
            number: req.body.number,
            image: req.body.image
        }
        )
        console.log(result)
        res.redirect('/')

    }catch(error){
        console.error(error)
    }
})
app.put('/updateEntry', async (req, res) =>{
    try{

    }catch(error){
        console.error(error)
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})