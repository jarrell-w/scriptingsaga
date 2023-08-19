//The app.js file should set up the webserver and control the 'settings' of it.
//It's also where you should connect to the database after creating the database connect file

//Require dot env file for using env file. Require express to use express
//set app to express app, use express layouts. set port number
//We use PORT 5000 or whatever port we must use from the env file.
require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')

console.log(process.env.MONGODB_URI)
const app = express()
const PORT = process.env.PORT || 5000 

connectDB();
app.use(expressLayouts)
//set public folder, set main ejs layout, set view engine.
app.use(express.static('public'))
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

//We are setting our router up in the routers/main file 
//So that it controls all the routing. '/' is the main page.
app.use('/', require('./server/routes/main'))

//listen on port and confirm.
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})