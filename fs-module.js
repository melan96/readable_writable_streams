const fs = require('fs');

fs.writeFile('./WriteMe.txt','text to going',function(err){
    if(err!=null){
        console.log('no error');
    }
})

// fs.readFile('WriteMe.txt','utf8',function(err,data){
//     console.log(data);
// });

// var readFileStream = fs.createReadStream('WriteMe.txt','utf8');
// readFileStream.on('data',function(chunk){
// console.log(chunk);
// });
