//1
const mongoose = require('mongoose');

//2
mongoose.connect('mongodb://localhost:27017/nodejs')
    .then(
        ()=>{
            console.log('connect to db :)')
        }
    )
    .catch(
        ()=>{
            console.log('no connect to db :(')
        }
    )