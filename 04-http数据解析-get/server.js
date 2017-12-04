const http = require('http');
let get = null;
http.createServer(function(req, res) { //一旦url发生变化，会再循环执行这个函数
	 console.log(req.url); //    /aaa?user=lanmeidada&pass=123
	let GET = {}
	if(req.url.indexOf('?') != -1) {

		let arr = req.url.split('?');
		let url = arr[0]; //arr[0] -> 地址 '/aaa'
		let arr2 = arr[1].split('&'); //arr[1] -> 数据 'user=lanmeidada&pass=123'
		for(let i = 0; i < arr2.length; i++) {
			let arr3 = arr2[i].split('=');
			/*
			arr3[0] -> 名字 'user'
			arr3[1] -> 数据 'lanmeidada'
			*/
			GET[arr3[0]] = arr3[1];
		}
		console.log(GET)
		get = GET;
	}else{
		let url = req.url;
		console.log(url, get);
	}


	res.write('lanmeidada');
	res.end()
}).listen(8080);