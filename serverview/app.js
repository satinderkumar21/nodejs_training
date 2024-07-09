const express = require('express');
const app = express();
 
 
app.listen(3000);

app.get('/',(req, res) =>{
    // res.send('<p>homr ppd</p>');
    res.sendFile('./index.html', {root: __dirname})
});

app.get('/about',(req, res) =>{
    // res.send('<p>about</p>');
    res.sendFile('./about.html',{root:__dirname});
});

