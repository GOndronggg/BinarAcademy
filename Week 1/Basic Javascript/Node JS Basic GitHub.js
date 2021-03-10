const express = require('express');
const app = express();
const port = 7000;

app.get('/', function(req, res){
  res.send('Hello My name is Mas Mas Gondrong');
});

app.post('/', function(req, res){
  res.send('Hello My name is Mas Mas Gondrong but its from post');
});

app.put('/', function(req, res){
  res.send('Hello My name is Mas Mas Gondrong from put too');
});

app.patch('/', function(req, res){
  res.send('Hello My name is Mas Mas Gondrong from patch');
});

app.delete('/', function(req, res){
  res.send('Hello My name is Mas Mas Gondrong from delete');
});

app.listen(port, function(){
  console.log('Hello my apps is running on port '+port);
});

