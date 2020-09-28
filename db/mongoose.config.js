const mongoose = require('mongoose');
const config = require('../config.json');

mongoose.connect(`mongodb://localhost/${config.DB}`, {
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Uh oh, stinky: ", err));