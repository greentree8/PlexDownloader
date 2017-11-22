const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var url = "";
var type = "";

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/torrentURL', (req, res) => {
    console.log(req.body);
    url = req.body.url;
    type = req.body.type;
    console.log("URL: " + url + "Type: " +  " " + type);
});