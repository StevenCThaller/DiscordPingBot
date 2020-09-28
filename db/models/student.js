const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: { 
        type: String, 
        validate: (value) => {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(value);
        }        
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student