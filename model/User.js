const mongoose = require('mongoose');
const Schema = mongoose. Schema;

const userSchema  = new Schema({
    username:{
        type: String,
        required: true
    },
    roles:{
        user:{
            type: Number,
            default: 2001

        },
        editor: Number, 
        Admin: Number
    }, 
    password:{
        type:String,
        required: true
    },
    refreshToken:String


});

module.exports = mongoose.model('User', userSchema);