var http = require('http');

http.createServer(
    function(req, res){
        
        //var path= req.url.toLowerCase();      
        var path= req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();   //reemplaza cualquier url o simbolo e ingresa al home
            
        switch(path){
            case '':
                res.writeHead(200, {'Content-Type':'text-plain'});
                res.end('Home');
                break;
            case '/about':
                res.writeHead(200, {'Content-Type':'text-plain'});
                res.end('About');
                break;
            default:
                res.writeHead(404, {'Content-Type':'text-plain'});
                res.end('Error not found');
                break;
        }
    }
).listen(3000);
console.log("Servidor en el puerto localhost:3000");
console.log("Enrutamiento");
