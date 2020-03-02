const express = require("express");
const sleep = require('sleep');
const app = express();

app.get("/api/test/:id", (req, res) => {
	let result = 0;
	for (let i=0; i<parseInt(req.params.id); i++) {
		//if (i%100000 == 0)
		//	sleep.msleep(10);
		result = result + 1;
	}
	res.send([result]);
});

app.listen(3000, () => console.log('start'));
