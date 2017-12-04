const urlLib = require('url');
let obj = urlLib.parse('http://www.baidu.com/index?user=lanmeidada&pass=123', true); // 加true会解析query部分，转换为对象

console.log(obj.pathname, obj.query);