const express = require('express');
const router = express.Router();

const Article = require('../models/article');


router.post('/add',(req , res)=>{
    //1
    let data = req.body;

    //2
    let art = new Article(data);

    //3
    art.save()
        .then(
            (saved)=>{res.send(saved)}
        )
        .catch(
            (err)=>{res.send(err)}
        )
});


// list article

// find() : [ ]
// find({categorie : 'web'}) : [ ]

//findOne() : {}
//findOne({_id : 'jfhehz'}) : {}

//findById({_id : 'hzhehzh'}) : {}



router.get('/list', (req , res)=>{
    
    Article.find() //listes des articles [  ]
        .then(
            (list)=>{res.send(list);}
        )
        .catch(
            (err)=>{res.send(err);}
        )
});

// /:id ==> : => pour connais c'est un parametre 
router.get('/byid/:id', (req , res)=>{

    //read id from req
    let myid = req.params.id;
    /**or let {id} = req.params; 
      *==> distarckching array or object et can you write more parametre like 
      *let {id , desc} = req.params
    */
    
    //find in db
    Article.findById({_id : myid})
        .then(
            (list)=>{res.send(list);}
        )
        .catch(
            (err)=>{res.send(err);}
        )
});


router.delete('/supp/:id', (req , res)=>{
    // read id
    let myId = req.params.id;

    Article.findByIdAndDelete({_id : myId})
        .then(
            (deleted)=>{res.send(deleted);}
        )
        .catch(
            (err)=>{res.send(err);}
        )

});

router.put('/update/:id' , (req , res)=>{
    let myId = req.params.id;
    let newdata = req.body;

    Article.findByIdAndUpdate({_id : myId} , newdata)
        .then(
            (up)=>{res.send(up);}
        )
        .catch(
            (err)=>{res.send(err);}
        )
});







module.exports = router;