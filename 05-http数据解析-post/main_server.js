const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

let server = http.createServer(function(req, res) {
	// GET方式
	let obj = urlLib.parse(req.url, true);
	let url = obj.pathname;
	const GET = obj.query;

	// POST方式
	let str = '';
	req.on('data', function(data) {
		str += data;
	});
	req.on('end', function(){
		const POST = querystring.parse(str);

		/**
		 * url —— 要什么
		 * GET —— get数据
		 * POST —— post数据
		 */
		console.log(url, GET, POST);


		// 文件请求
		let file_name = './www' + url;
		fs.readFile(file_name, function (err, data) {
			if(err) {
				res.write('404');
			}else{
				res.write(data);
			}
			res.end();
		});
	});
});

server.listen(8080);