const Client = require('node-rest-client').Client;
const client = new Client();

const TEST_NUM = 2000;
const TEST_SIZE = 1000;

let startTime = new Date().getTime();
for (var i=1; i<TEST_NUM; i++) {
	client.get("http://localhost:3001/api/test/"+TEST_SIZE, (data, response) => {
	});
}

client.get("http://localhost:3001/api/test/"+TEST_SIZE, (data, response) => {
	let endTime = new Date().getTime();
	console.log("total time : "+(endTime-startTime));
});
