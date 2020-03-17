if (process.argv.length!=3) {
	console.log("add file name");
	console.log("node json_request_test.js <file_name>");
	process.exit();
}

let request = require('request');
let fs = require('fs');
let file_name = process.argv[2];
let REQUEST_NUM = 1000;

//메모리 캐싱이 일어남
var jsonData = JSON.parse(fs.readFileSync('bigfile100.json'));

let startTime = new Date().getTime();
for (var i=1; i<REQUEST_NUM; i++) {
	request.post({
			headers: {'content-type': 'application/json'},
			url: 'http://127.0.0.1:3000/api/jsonio/'+i,
			body: jsonData,
			json: true,
		}, (err, response, body) => {
	});
}

request.post({
		headers: {'content-type': 'application/json'},
		url: 'http://127.0.0.1:3000/api/jsonio/'+REQUEST_NUM,
		body: jsonData,
		json: true,
	}, (err, response, body) => {
	let endTime = new Date().getTime();
	let diff = endTime-startTime;
	console.log("total time : "+diff);

	let obj = {};
	obj[file_name] = diff;
	console.log(obj);
	let stringJson = JSON.stringify(obj)+'\n';
	fs.open('result.json', 'a', "666", (err, id) => {
		if (err) {
			console.log("file open err!");
		} else {
			fs.write(id, stringJson, null, 'utf8', (err) => {
				console.log('file was saved!');
			});
		}
	});
});
