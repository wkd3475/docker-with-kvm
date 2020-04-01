const Client = require('node-rest-client').Client;
const client = new Client();
const fs = require('fs');

if (process.argv.length!=4) {
	console.log("add file name");
	console.log("node json_request_test.js <file_name> <stress>");
	process.exit();
}

let file_name = process.argv[2];
let LOAD_STRENGTH = process.argv[3];

client.get("http://192.168.0.114:3000/api/cpu/"+LOAD_STRENGTH, (data, response) => {
	let obj = {};

	fs.exists('./data/result3000.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result3000.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result3000.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result3000.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});

client.get("http://192.168.0.114:3001/api/cpu/"+LOAD_STRENGTH, (data, response) => {
	let obj = {};

	fs.exists('./data/result3001.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result3001.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result3001.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result3001.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});

client.get("http://192.168.0.114:3002/api/cpu/"+LOAD_STRENGTH, (data, response) => {
	let obj = {};

	fs.exists('./data/result3002.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result3002.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result3002.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result3002.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});
client.get("http://192.168.0.114:3003/api/cpu/"+LOAD_STRENGTH, (data, response) => {
	let obj = {};

	fs.exists('./data/result3003.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result3003.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result3003.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result3003.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});