//the routes file should be in the server folder and control the page routing.
//We may also split routing up into controllers.

//We set a server folder to handle server login. 
//This page is the router that will control the routing to
//to different pages. We have to export the router variable to use.
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const locals = {
        title: "The Scripting Saga | Jarrell W",
        description: "A personal blog create with node express and mongoDB"
    }

    res.render('index', locals)
})
router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})


module.exports = router