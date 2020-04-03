if (process.argv.length!=4) {
	console.log("you need argvs");
    console.log("ex) node client.js <file_num> <load_strength>");
	process.exit();
}

let file_name, LOAD_STRENGTH

file_name = process.argv[2];

if (Number(process.argv[3]<0) || Number(process.argv[3])>Math.pow(2, 63)) {
	console.log("wrong load_strength(1~2^63)");
	process.exit();
} else {
	LOAD_STRENGTH = Number(process.argv[3]);
}

console.log("load_strength :"+LOAD_STRENGTH);

const Client = require('node-rest-client').Client;
const client = new Client();
const fs = require('fs');

let PORT_NUM1 = 3000;
let PORT_NUM2 = 3001;
let PORT_NUM3 = 3002;
let PORT_NUM4 = 3003;

client.get("http://192.168.122.4:"+PORT_NUM1+"/api/io/"+LOAD_STRENGTH, (data, response) => {
    let obj = {};

    fs.exists('./data/result'+PORT_NUM1+'.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result'+PORT_NUM1+'.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result'+PORT_NUM1+'.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result'+PORT_NUM1+'.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});

client.get("http://192.168.122.5:"+PORT_NUM2+"/api/io/"+LOAD_STRENGTH, (data, response) => {
    let obj = {};

    fs.exists('./data/result'+PORT_NUM2+'.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result'+PORT_NUM2+'.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result'+PORT_NUM2+'.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result'+PORT_NUM2+'.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});

client.get("http://192.168.122.6:"+PORT_NUM3+"/api/io/"+LOAD_STRENGTH, (data, response) => {
    let obj = {};

    fs.exists('./data/result'+PORT_NUM3+'.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result'+PORT_NUM3+'.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result'+PORT_NUM3+'.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result'+PORT_NUM3+'.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});

client.get("http://192.168.122.7:"+PORT_NUM4+"/api/io/"+LOAD_STRENGTH, (data, response) => {
    let obj = {};

    fs.exists('./data/result'+PORT_NUM4+'.json', (exists) => {
		if (exists) {
			fs.readFile('./data/result'+PORT_NUM4+'.json', function readFileCallback(err, datas) {
				if (err) {
					console.log(err);
				} else {
					obj = JSON.parse(datas);
					obj[file_name] = JSON.parse(data);
					let json = JSON.stringify(obj);
					fs.writeFile('./data/result'+PORT_NUM4+'.json', json, (err) => {
						if (err)
							console.log(err);
					})
				}
			});
		} else {
			obj[file_name] = JSON.parse(data);
			let json = JSON.stringify(obj);
			fs.writeFile('./data/result'+PORT_NUM4+'.json', json, (err) => {
				if (err)
					console.log(err);
			})
		}
	});
});