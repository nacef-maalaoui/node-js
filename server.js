const express = require('express');

require('./config/connect');


const articleRouter = require('./routes/article');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const app = express();
app.use(express.json());

// http://127.0.0.1:3000/

//test endpoint
app.get('/',(req,res)=>{
    res.send('server is working :)')
})


console.log('hello world');

app.use('/article' , articleRouter);
app.use('/product' , productRouter);
app.use('/user' , userRouter);

//pour acces les images dons folder uploads et use in front-end
app.use('images' , express.static('./uploads'));



app.listen(
    3000 , 
    ()=>{console.log('server is working :)');
});