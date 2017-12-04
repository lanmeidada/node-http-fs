const querystring = require('querystring');
let json = querystring.parse('user=lanmeidada&pass=123&age=18');
console.log(json)
/*
querysting 是node自带的，把参数以对象的方式输出
*/