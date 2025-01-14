//1
const mongoose = require('mongoose');

//2
const Article = mongoose.model('Article' , {
    title : {
        type : String
    },
    description : {
        type : String
    },
    catigorie : {
        type : String
    }
});

//3
module.exports = Article;