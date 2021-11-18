// server.js
const express = require('express');
const app = express();
const port = 4000;
const port2 = 5000;

app.listen(port, () => {
	console.log(`Success! Your application is running on port ${port}.`);
});

app.listen(port2, () => {
	console.log(`Success! Your application is running on port ${port2}.`);
});
