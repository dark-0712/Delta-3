const express = require('express');
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
//const mysql = require('mysql');
const alert = require('alert');

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/slambook/static/first.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/slambook/static/login.html');
});

app.post('/action_page.php', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  //function changename(){
  //  document.querySelector('#hello').innerHTML=`${username}`
  //}
  console.log(`Hello ${username}`);
  alert(`Hola ${username}`);

  res.sendFile(`${__dirname}/slambook/static/dashboard.html`);
});
app.get('/comments.html', (req, res) => {
  res.sendFile(__dirname + '/slambook/static/comments.html');
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
