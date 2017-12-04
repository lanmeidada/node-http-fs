const http = require('http');
const querystring = require('querystring');

http.createServer(function(req, res) {
	console.log(req.url); //  /aaa?user=lanmeidada&pass=123

	let GET = {};

	if(req.url.indexOf('?') != -1) {
		let arr = req.url.split('?');
		let url = arr[0]; // arr[0] -> 地址	'/aaa'
		GET = querystring.parse(arr[1]); // arr[1] -> 数据	'user=abc&pass=123'
	}else{
		let url = req.url;
		console.log(url, GET);
	}
	res.write('lanmeidada');
	res.end();
}).listen(8080);