//mongoose to connect to database
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI
//creating connect to db function
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODB_URI)
        console.log(`Connect to database with connection ${conn.connection.host}`)

    } catch(e) {
        console.log(e)
    }
}
//exporting connect to db function
module.exports = connectDB

