const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// upload file
const multer = require('multer');
let fileName = '';

const storg = multer.diskStorage({
    destination: './uploads',
    filename: (req , file , redirect)=>{
        fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        redirect(null , fileName);
    }
})

const upload = multer({ storage : storg });


router.post('/addp', upload.single('image') ,(req , res)=>{
    //1
    let data = req.body;

    //2
    let art = new Product(data);

    //3
    art.image = fileName;
    art.save()
        .then(
            (saved)=>{
                fileName = '';
                res.send(saved);
            }
        )
        .catch(
            (err)=>{res.send(err);}
        )
});


router.get('/listp',(req , res)=>{
    Product.find()
        .then(
            (list)=>{res.send(list);}
        )
        .catch(
            (err)=>{res.send(err);}
        )
});

router.get('/byidp/:id' , (req , res)=>{
    let myId = req.params.id;
    Product.findById({_id : myId})
        .then(
            (byidp)=>{res.send(byidp)}
        )
        .catch(
            (err)=>{res.send(err)}
        )
});

router.delete('/dltp/:id' , (req , res)=>{
    let myId = req.params.id;
    Product.findByIdAndDelete({_id : myId})
    .then(
        (dlt)=>{res.send(dlt);}
    )
    .catch(
        (err)=>{res.send(err);}
    )
});


router.put('/updatep/:id' , (req , res)=>{
    let myId = req.params.id;
    let newdata = req.body;

    Product.findByIdAndUpdate({_id : myId} , newdata)
        .then(
            (up)=>{res.send(up);}
        )
        .catch(
            (err)=>{res.send(err);}
        )
});







module.exports = router;