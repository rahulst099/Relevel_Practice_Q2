const mongoose = require('mongoose');
const addressSchema = require('./address.model');

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    emailId : {
        type : String,
        required : true,
    },
    linkedInProfile : {
        type : String,
        enum : ['STUDENT', 'ADMIN'],
        default : 'STUDENT' 
    },
    address : {
        type : addressSchema,
        required : true 
    }
});

modeule.exports = userSchema;