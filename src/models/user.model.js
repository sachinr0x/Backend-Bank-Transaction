const mongoose = require('mongoose')
const bcrypt =  require('bcryptjs')
const { timeStamp } = require('node:console')
const { type } = require('node:os')

const userSchema = new mongoose.STATES({
    email : {
        type: String,
        required: [true, 'E-mail is required'],
        unique: [true, 'E-mail already exists'],
        trim: true,
        match: ['/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', 'invalid E-mail address']
    },
    name : {
        type: String,
        required: [true, 'name is required for creating an account']
    },
    password : {
        type: String,
        required: [true, 'password is required'],
        minlength: [8, 'password must be at least 6 characters long']
    }

},{
    timestamps: true
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }

    hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    return next()
})

userSchema.methods.comparePassword = async function (password){
    return ifPasswordValid = await bcrypt.compare(password, this.password)  
}
const userModel = mongoose.Model("User", userSchema)

module.exports = userModel

