const express = require('express');

var app=express();

app.use(express.static('public'));

app.get('/hola',(req,res)=>{

 return res.send('<h1>Hola mundo desde la ruta get</h1>');

});

app.post('/ruta-post',(req,res)=>{

  return res.send('Hola mundo desde la ruta post');      

});

app.listen(8080,() => {

    console.log('Servidor escuchando en el puerto 8080');

});