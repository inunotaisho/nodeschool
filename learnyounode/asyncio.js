var fs = require('fs');
var filename = process.argv[2];
function newlines (err,data){
    var lineCount = data.toString().split('\n').length -1;
    if(err){
       return console.log('errors', err);
    }else{
       return console.log(lineCount);
    }
};
fs.readFile(filename, newlines);



