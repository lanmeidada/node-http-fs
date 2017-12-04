const fs = require('fs');
/*
异步vs同步
异步————多个操作可以同时进行，前一次的操作没完善，后一次也能开始
同步————一次一个
*/
fs.readFile('lanmeidada.txt',function(err,data) { //fs.readFile(文件名，回调函数)
	if(err) {
		console.log('读取失败');
	}else{
		console.log(data.toString());
	}
})