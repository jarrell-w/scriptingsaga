//the routes file should be in the server folder and control the page routings.
//We may also split routing up into controllers.
//We have to export the router variable to use.

const express = require('express')
const router = express.Router()
//calling our exported database schema
const Blog = require('../models/Blog')

//async function to route homepage
//also pulls data from the database for the homepage
//and passes it to our ejs file listed in the first argument
//to be rendered.
router.get('/', async (req, res) => {
    const locals = {
        title: "The Scripting Saga | Jarrell W",
        description: "A personal blog create with node express and mongoDB"
    }
    try {
        const data = await Blog.find()
        res.render('index', {locals, data})
        
    } catch(e) {
        console.log(e)
    }
})
//setting up dynamic router for generating posts
// /post/:id <- :id is a special placeholder for a dynamic value that
//will be extracted from the URL and able to be accessed from the req.params object.
router.get('/post/:id', async (req, res) => {
    const locals = {
        title: "The Scripting Saga | Jarrell W",
        description: "A personal blog create with node express and mongoDB"
    }
    //grabs id of post set by ejs from req.params obj
    let slug = req.params.id
    try {
        //use findById method to grab by primary key/id in the database.
        const data = await Blog.findById({_id : slug})
        res.render('post', {locals, data})
        
    } catch(e) {
        console.log(e)
    }
})
router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})



/*
Inserting data following the model structure as an array of objects.
function insertData () {
    Blog.insertMany([{
        title: 'Crafting your story',
        body: 'How to write a compelling story that paints a picture of who you are.'
    }, {
        title: 'How to sharpen your algoritms skills',
        body: "A quick guide to sharpening your skills."
    }, {
        title: "Getting your first interview",
        body:"How to spearhead your way into the tech industry."
    }])
}
Calling function to add data to the database.

insertData();
*/
module.exports = router