var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port !'+process.env.PORT);
  console.log(returnText());
})

function returnText() {
    
    return 'Hello Raj Apigee';
}

module.exports.returnText = returnText();