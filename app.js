// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MIDDLEWARE
// set the 'public' folder as the location for our static files:
app.use(express.static('public'));

// specify that we are using 'ejs' templates in our app:
app.set('view engine', 'ejs');

// allow the app to receive data from form submits
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  res.render('default-layout', {
     title: "My Home Page",
     content: "<h1>Hello World from Express!</h1>"
  });
});

app.get('/some-route', (req, res) => {
   res.send('<h1>This is some route</h1>');
});

app.get("/dynamic-page.html", (req, res) => {
   const currentTime = new Date();
   res.send(`<h1>The current time is ${currentTime.toString()}</h1>`);
});

app.get('/signup', (req, res) => {
  res.render('signup-layout', {
     title: "Sign Up"
  });
});

app.post('/signup-confirmation', (req, res) => {

  // import the addUser function
  const {addUser} = require("./modules/user-helpers");

  // destructure the req.body object into individual variables
  const {firstName, lastName, email, password, confirmPassword} = req.body;

  // make sure that all required data has been sent
  if(firstName && lastName && email && password && confirmPassword){
    // make sure the passwords match
    if(password === confirmPassword){
      // If everything is valid, then add the new user
      addUser({firstName, lastName, email, password});
      res.send("Thank you for signing up!")
    }else{
      res.send("Invalid form submit - Passwords do not match!")
    }
  }else{
   res.send("Invalid form submit - All fields are required!");
  }
});

app.get('/login', (req, res) => {
  res.render('login-layout', {
     title: "Log In"
  });
});

app.post('/login', (req, res) => {
  const bcrypt = require('bcrypt');
  const {getUserByEmail} = require("./modules/user-helper");
  const {email, password:passwordEntered} = req.body;
  const user = getUserByEmail(email);
    if(user){
      const result = await bcrypt.compare(passwordEntered, user.password)
      if(result){
        res.send("Logged In!");
      }else{
        res.send("Wrong password!");
      }
    }else{
      res.send("Invalid Email");
    }

  const sessions = {}

  // import the login() function
  const {login} = require("./modules/user-helpers");

  // destructure the req.body object to get the email and password from it
  const {email, password} = req.body;

  // attempt to login
  const user = login(email, password);
  if(user){
    res.send(`Hello ${user.firstName}`);
  }else{
    res.send("Invalid Login Attempt");
  }
});

// START THE SERVER
const port = 8080; // We'll run the server on port 8080
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});

