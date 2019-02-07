const fs= require('fs');

//getting data from readme.txt via asynchronus readable streams way and writing to writeme.txt using writable streams


var readFileStream = fs.createReadStream('WriteMe.txt','utf8');
var writeStream = fs.WriteStream(__dirname+'/ReadMe.txt','utf8');

readFileStream.on('data',function(chunk){
console.log(chunk);
writeStream.write(chunk);
});
