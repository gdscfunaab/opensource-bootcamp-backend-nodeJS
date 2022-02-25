const UserModel = require('../Models/userModel')


const handleError = ((err) => {

})
// index_get, login_get, login_post, register_get, register_post
const index_Get = ((req, res, next) => {
    res.render('home', { title: "Home"});

})
const login_Get= ((req, res, next) => {
    res.render('login', { title: "Login"});    

})
const login_Post = ((req, res, next) => {
    const { email, password } = req.body 
    console.log( email, password)
})
const register_Post = ( async (req, res, next) => {
    const userBody = req.body;

    try{
        const user = await new UserModel({
            username: userBody.name,
            email: userBody.email,
            password: userBody.passsword
        })
        const result = await user.save()
        console.log(result)
    }
    catch(err) {
        console.log(err)
        res.json(err)
    }
})
const register_Get = ((req, res, next) => {
    res.render('register', { title: "Registration"});    
})

module.exports = {
    index_Get,
    login_Get,
    login_Post,
    register_Post,
    register_Get
}