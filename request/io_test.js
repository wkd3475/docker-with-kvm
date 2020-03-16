if (process.argv.length!=5) {
	console.log("you need argvs");
	console.log("ex) node client.js <language> <request_num> <load_strength>");
	console.log("<language>");
	console.log(": java, python, javascript, go");
	console.log("<request_num>");
	console.log(": 1~2000");
	console.log("<load_strength>");
	console.log(": 1~2^63");
	process.exit();
}

let PORT_NUM, REQUEST_NUM, LOAD_STRENGTH

if (process.argv[2]=="javascript") {
	PORT_NUM = 3000;
} else if (process.argv[2]=="go") {
	PORT_NUM = 3001;
} else if (process.argv[2]=="python") {
	PORT_NUM = 3002;
} else if (process.argv[2]=="java") {
	PORT_NUM = 3003;
} else {
	console.log("wrong language");
	process.exit();
}

if (Number(process.argv[3])<0 || Number(process.argv[3])>2000) {
	console.log("wrong request_num(1~2000)");
	process.exit();
} else {
	REQUEST_NUM = Number(process.argv[3]);
}

if (Number(process.argv[4]<0) || Number(process.argv[4])>Math.pow(2, 63)) {
	console.log("wrong load_strength(1~2^63)");
	process.exit();
} else {
	LOAD_STRENGTH = Number(process.argv[4]);
}

console.log("request_num :"+REQUEST_NUM);
console.log("load_strength :"+LOAD_STRENGTH);

const Client = require('node-rest-client').Client;
const client = new Client();

let startTime = new Date().getTime();
for (var i=1; i<REQUEST_NUM; i++) {
	client.get("http://localhost:"+PORT_NUM+"/api/io/"+LOAD_STRENGTH, (data, response) => {
	});
}

client.get("http://localhost:"+PORT_NUM+"/api/io/"+LOAD_STRENGTH, (data, response) => {
	let endTime = new Date().getTime();
	console.log("total time : "+(endTime-startTime));
});
