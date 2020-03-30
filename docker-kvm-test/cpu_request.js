const Client = require('node-rest-client').Client;
const client = new Client();

let PORT_NUM, REQUEST_NUM, LOAD_STRENGTH;

if (process.argv.length!=5) {
	console.log("you need argvs");
	console.log("ex) node client.js <port-num> <request_num> <load_strength>");
	console.log("<language>");
	console.log(": java, python, javascript, go");
	console.log("<request_num>");
	console.log(": 1~2000");
	console.log("<load_strength>");
	console.log(": 1~2^63");
	process.exit();
}

if (process.argv[2]>=3000) {
	PORT_NUM = process.argv[2];
} else {
	console.log("wrong port num (port_num >= 3000)");
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

let startTime = new Date().getTime();
for (var i=1; i<REQUEST_NUM; i++) {
	client.get("http://localhost:"+PORT_NUM+"/api/cpu/"+LOAD_STRENGTH, (data, response) => {
	});
}

client.get("http://localhost:"+PORT_NUM+"/api/cpu/"+LOAD_STRENGTH, (data, response) => {
	let endTime = new Date().getTime();
	console.log("total time : "+(endTime-startTime));
});