/*
=========REQUIRED DEPENDECIES===========
*/
const express = require('express')
const app = express()
const homeRoutes = require('./routes/texis')
const editRoutes = require('./routes/edit')
const connectDb =  require('./config/database')
const PORT = 2121
require('dotenv').config({path: './config/.env'})

connectDb()

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
app.use('/', homeRoutes)
app.use('/edit', editRoutes)


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})