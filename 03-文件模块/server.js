const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {
	/*
	req.url => 'index.html'
	读取 => './www' +req.url
	*/
	let file_name = './www' +req.url;
	fs.readFile(file_name, function(err, data) {
		if(err) {
			res.write('404');
		}else{
			res.write(data);
		}
		res.end();
	});
	fs.writeFile(file_name, 'I am lanmeidada!', function(err,data) {
		if(err) {
			console.log(err);
		}else{
			console.log('success!')
		}
	});
});
server.listen(8080);