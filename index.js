const path =require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.use(express.static('public'));

// route home
app.get('/',(req,res)=>{
    res.render('index');    
});

app.listen(8000,()=>{
    console.log('Server bejalan di port 8000');
})