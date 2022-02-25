const mongoose = require('mongoose')
const { isEmail } = require('validator')


// Connection to Database
const dbURI = 'mongodb+srv://admin:12345abcde@userauth.e2sai.mongodb.net/user?retryWrites=true&w=majority';

// Creating a User Schema
const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your Username"],
        minlength: 1,
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]

    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length is 6 characters"],

    }, 
    confirmPassword: {
        type: String,
        required: true,
    },
})

const loginSchema = new mongoose.Schema({
    emaiil: {
        type: String,
        required: [true, "Please enter an email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    }
})

const registerModel = mongoose.model('AuthUser', registerSchema)

module.exports = registerModel
