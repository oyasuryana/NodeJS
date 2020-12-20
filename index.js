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

// route about
app.get('/about',(req,res)=>{
    res.render('about')
})

// route form buku tamu
app.get('/bukutamu',()=>{
    res.render('BukuTamu');
});

app.listen(8000,()=>{
    console.log('Server bejalan di port 8000');
})