const mongoose = require('mongoose')

// Connection to Database
const dbURI = 'mongodb+srv://admin:12345abcde@userauth.e2sai.mongodb.net/user?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, ()=>{
        console.log('Server Listening on localhost:' + port)
    }) )
    .catch((err) => console.log(err));

// Creating a User Schema
const userSchema = new mongoose.Schema({

})