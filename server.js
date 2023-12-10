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
    dbName = 'deep-house-names'

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


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})