var http=require('http') // folosim modulul 'http' predefinit
var server=http.createServer( // cream un server Web
// functie anonima ce trateaza o cerere si trimite un raspuns
(function(request,response){
// stabilim valori pentru diverse campuri-antet HTTP
response.writeHead(200, {"Content-Type" : "text/html"});
// emitem raspunsul propriu-zis conform tipului MIME (cod HTML)
response.end('<html><body><h1>Salutari din Node.js</h1></body></html>');
}));
server.listen(7000); // serverul este pornit si asculta cereri la portul 7000 al masinii locale
console.log ('Serverul creat asteapta cereri la http://localhost:7000/');
