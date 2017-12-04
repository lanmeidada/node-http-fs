const http = require('http');//定义http常量
/*
request   请求 输入-请求的信息
response  响应 输出-输出的东西 
*/
let server = http.createServer(function(req, res) {
	/*
	console.log('server started');
	console.log(req.url);
	favicon.ico  -- 网站图标ico
	*/
	switch(req.url) {
		case '/index.html':
			res.write('This is index!'); //实际上是跳转到index网页
			break;
		case '/lanmeidada.html':
			res.write('I am lanmeidada!');
			break;
		default:
			res.write('404');// 实际上读取404网页
			break;
	}
	res.end();
});
/*
监听 -- 等着
端口
*/
server.listen(8080);  //   http://localhost:8080/
