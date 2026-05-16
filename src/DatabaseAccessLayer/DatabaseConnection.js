const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(`${process.env.DB_URI}${process.env.DB_NAME}`)
        console.log(`connected to ${process.env.DB_NAME} database successfully`)
    }
    catch(err){
        console.log('error:', err)
        process.exit(1)
    }
}

module.exports = connectDB