// IMPORTS
const express = require('express');
const app = express();

// MIDDLEWARE
// We'll add 'middleware' code here soon

// set the 'public' folder as the location for our static files:
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
   res.send('<h1>Hello World from Express!</h1>');
});

app.get('/some-route', (req, res) => {
   res.send('<h1>This is some route</h1>');
});

app.get("/dynamic-page.html", (req, res) => {
   const currentTime = new Date();
   res.send(`<h1>The current time is ${currentTime.toString()}</h1>`);
});

// START THE SERVER
const port = 8080; // We'll run the server on port 8080
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});