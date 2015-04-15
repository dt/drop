var express = require("express");
var multer = require('multer');
var path = require('path');
var app = express();
var port = Number(process.argv[2]);

app.use(multer({
  dest: './u/', rename: function (id, file) {return file.replace(/ /g,"_")+Date.now();}
}));
app.post('/upload',function(req, res){ res.json({'file': req.files['file'].path});});

// Un-used when nginx is serving, but helpful in dev.
var serveStatic = require('serve-static');
app.use(serveStatic('.', {'index': ['index.html']}));

app.listen(port, function(){ console.log("listening on port http://localhost:"+port+"/");});
