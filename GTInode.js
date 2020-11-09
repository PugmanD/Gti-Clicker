var http = require("http");
var mysql = require('mysql');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
    //lookup score in db
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'appuser',
      password : 'password1',
      database : 'gti'
    });
     
    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('Responding with score: ', results[0].solution);
        // response.end(results[0].solution);
    });
     
    connection.end();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');