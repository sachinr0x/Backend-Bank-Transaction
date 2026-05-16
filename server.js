require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/DatabaseAccessLayer/DatabaseConnection')


connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`)
})