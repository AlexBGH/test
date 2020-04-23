//utilisation du module express
let express = require('express');
let server = express();

//mise en place
const hostname = "localhost"
const port = 3000;

//lance le server sur le port 
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)  
});

//route vers la page d'accuei
server.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});       