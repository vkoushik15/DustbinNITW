const mongoose = require('mongoose')

const Db = async()=>{
    try {
        await mongoose.connect("mongodb+srv://koushik:nitwdustbin@dustbinsnitw.mq5ju.mongodb.net/?retryWrites=true&w=majority&appName=DustbinsNITW")
        console.log('Connected to database')
    } catch (error) {
        console.log('Error connecting to database')
        console.log(error)
    }
}
module.exports = Db
