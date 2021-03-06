
var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var fs = require('fs');
var fetch = require('node-fetch');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
var cors = require('cors');

app.use(cors())

app.get('/getImages', (req, res) => {
    const getData = async url => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        return res.json(json)
      } catch (error) {
        console.log(error);
      }
    };
    getData('http://192.168.0.15:8080/ccapi/ver100/contents/sd/100CANON');
})


http.listen(3001, function(){
  console.log('listening on *:3001');
});
