const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// call to the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// routing
app.get('/', (req, res) => {
	res.send('Welcome to the MERN Stack!');
});

// GET request
app.get('/api/data', (req, res) => {
	res.send('GET request successful!');
});

// POST request
app.post('/api/data', (req, res) => {
	res.send('POST request successful!');
});

// PUT request
app.put('/api/data/:id', (req, res) => {
	res.send(`PUT request successful for ID: ${req.params.id}`);
});

// DELETE request
app.delete('/api/data/:id', (req, res) => {
	res.send(`DELETE request successful for ID: ${req.params.id}`);
});

// Middleware for logging requests
app.use((req, res, next) => {
	console.log(`Request recieved: ${req.method} ${req.url}`);
	next();
})