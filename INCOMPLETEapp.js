// IMPORTS
const express = require('express');
const app = express();

// MIDDLEWARE
// We'll add 'middleware' code here soon
// set the 'public' folder as the location for our static files:
app.use(express.static('public'));
// specify that we are using 'ejs' templatesnin our app:
app.set('view engine', 'ejs');
// allow the app to receive data from submits

// app.use(bodyParser.urlencoded({ extended: true}));

// set up the cookie parser

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

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

const productRoutes = require("./products/product.routes.js");
app.use("/products", productRoutes);

// START THE SERVER
const port = 8080; // We'll run the server on port 8080
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});