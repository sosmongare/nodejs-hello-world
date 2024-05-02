const express = require('express') // import express  package to the express value
const app = express() //instantiate application by calling express.

app.get('/', (req, res) => res.send('Hello World!This is my first nodejs-express application')) // tell the app object to listen to GET requests on / path using get() method
app.listen(3000, () => console.log('Server ready')) // startthe server and telll it to listen on port 3000
