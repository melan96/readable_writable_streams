
var $ = require('jquery');
// $.ajax({
//     dataType:'json',
//     url:'url',
//     data:'data',
//     success:'success'
// });


$.getJSON('https://api.github.com/users',function(data){
    console.log(JSON.stringify(data));
});