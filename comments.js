// Create web server
// 1. Load the express module
// 2. Create an instance of express
// 3. Create a route for GET request to the root URL
// 4. Create a route for GET request to the /comments URL
// 5. Start the server on port 3000

// 1. Load the express module
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Create a route for GET request to the root URL
app.get('/', function (req, res) {
    res.send('Hello World');
});

// 4. Create a route for GET request to the /comments URL
app.get('/comments', function (req, res) {
    res.send('This is the comments route');
});

// 5. Start the server on port 3000
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});