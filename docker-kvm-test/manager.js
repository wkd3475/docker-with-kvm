const fs = require('fs');

fs.readFile('./data/result3000.json', (err, data) => {
    let jsonobj = JSON.parse(data);
    let result = 0;
    for (let i=1; i<=Object.keys(jsonobj).length; i++) {
        result = result + parseInt(jsonobj[i]);
    }
    console.log("result3000 : " + result/Object.keys(jsonobj).length);
});

fs.readFile('./data/result3001.json', (err, data) => {
    let jsonobj = JSON.parse(data);
    let result = 0;
    for (let i=1; i<=Object.keys(jsonobj).length; i++) {
        result = result + parseInt(jsonobj[i]);
    }
    console.log("result3001 : " + result/Object.keys(jsonobj).length);
});

fs.readFile('./data/result3002.json', (err, data) => {
    let jsonobj = JSON.parse(data);
    let result = 0;
    for (let i=1; i<=Object.keys(jsonobj).length; i++) {
        result = result + parseInt(jsonobj[i]);
    }
    console.log("result3002 : " + result/Object.keys(jsonobj).length);
});

fs.readFile('./data/result3003.json', (err, data) => {
    let jsonobj = JSON.parse(data);
    let result = 0;
    for (let i=1; i<=Object.keys(jsonobj).length; i++) {
        result = result + parseInt(jsonobj[i]);
    }
    console.log("result3003 : " + result/Object.keys(jsonobj).length);
});