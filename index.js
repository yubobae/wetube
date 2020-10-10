const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhosting:${PORT}`);
};

function handleHome(req, res) {
    console.log(req);
    res.send('Hello from home');
}
app.get('/', handleHome); 

app.listen(PORT , handleListening);