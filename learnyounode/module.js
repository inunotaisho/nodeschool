var mod = require("./modular");
var x = process.argv[2];
var y = process.argv[3];

mod(x,y, function(error, files) {
	for (i = 0; i < files.length; i++){
		console.log(files[i]);
	}
});



