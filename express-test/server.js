if (process.argv.length!=3) {
	console.log("you need argvs");
	console.log("ex) node server.js <port>");
	process.exit();
}

const PORT_NUM = process.argv[2];

const express = require("express");
const fs = require('fs');
const app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/api/cpu/:id", (req, res) => {
	let startTime = new Date().getTime();
	let result = 0;
	for (let i=0; i<parseInt(req.params.id); i++) {
		result = ((result + Math.random()*10000)*Math.sqrt(Math.random()*10000))%123456789;
	}
	let endTime = new Date().getTime();
	res.send([endTime-startTime]);
});

app.get("/api/makefile/:id", (req, res) => {
	fs.stat("./json/bigfile"+req.params.id+".json", (err) => {
		if (!err) {
			console.log("file or directory exists");
			res.send(["already exist!"]);
		}
		else if (err.code === 'ENOENT') {
			let obj = {};
			for (let i=1; i<=parseInt(req.params.id); i++) {
				obj["data"+i] = "val"+i;
			}
			let stringJson = JSON.stringify(obj);
			fs.open("./json/bigfile"+req.params.id+".json", 'a', "666", (err, id) => {
				if (err) {
					console.log("file open err!");
				} else {
					fs.write(id, stringJson, null, 'utf8', (err) => {
						console.log("file was saved!");
					});
				}
			});
			res.send([req.params.id]);
		}
	});
});

app.post("/api/jsonio/:id", (req, res, next) => {
	let startTime = new Date().getTime();
	let body = req.body;
	let writer = fs.createWriteStream("./file/bigfile"+req.params.id+".txt");
	for (var i=0; i<1000; i++) {
		for (key in body) {
			writer.write(key+":"+body[key]+"\n");
		}
	}
	writer.end();
	writer.on('finish', () => {});
	console.log('finish'+req.params.id);
	let endTime = new Date().getTime();
});

app.get("/api/io/:id", (req, res) => {
	let startTime = new Date().getTime();
	let writer = fs.createWriteStream("./file/bigfile"+PORT_NUM+".txt");
	for (let i=1; i<=parseInt(req.params.id); i++) {
		writer.write("server #"+i+"\n");
	}
	writer.end();
	writer.on('finish', () => {
	});
	let endTime = new Date().getTime();
	res.send([endTime-startTime]);
});

app.listen(PORT_NUM, () => console.log('start'));
