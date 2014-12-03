// required modules
var express = require("express");

//create application
var app = express();

//get the core cfenv application environment
var cfenv = null;
try { 
    cfenv = require('cfenv');
}
catch(err) {
}
var port = 3000;
var host = "localhost";
if (cfenv) {
    var appEnv = cfenv.getAppEnv();

    port = appEnv.port;
    host = appEnv.host;
}

//application context
app.use(express.static(__dirname + '/public'));

//ready to go
app.listen(port);
console.log("Server listening on port " + port);