const express = require("express");
const sleep = require('sleep');
const app = express();

app.get("/api/cpu/:id", (req, res) => {
	let result = 0;
	for (let i=0; i<parseInt(req.params.id); i++) {
		result = result + 1;
	}
	res.send([result]);
});

app.listen(3000, () => console.log('start'));
