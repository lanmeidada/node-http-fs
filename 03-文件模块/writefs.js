const fs = require('fs');
fs.writeFile('write.txt', 'I am lanmeidada!', function(err, data) { // writeFile(文件名， 内容， 回调函数)
	if(err) {
		console.log(err);
	}else{ //此处为文件写入成功，可以不写
		console.log('success!')
	}
})
/*
readfile(文件名,funtion(err,data) {})
writeFile(文件名, 内容, function(err) {})
*/