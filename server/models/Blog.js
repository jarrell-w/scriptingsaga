const mongoose = require('mongoose')
//initialize schema
const schema = mongoose.Schema

//creat new schema aka "model to set the types of the data, required or not, etc."
const BlogSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        //set createdAt column type to Date and set the Date to the time the entry was made.
        type: Date,
        default: Date.now
    }
})
//exporting our created database model, the first argument will be
//the name of the table (think mySQL)
module.exports = mongoose.model('Blog', BlogSchema)