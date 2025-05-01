//http module included with node.js
import http from 'http';

const PORT =8000;
const server = http.createServer((req,res)=>{
    //res.setHeader('Content-Type','text/html');
    //res.statusCode=404;
    res.writeHead(404,{'Content-Type':'text/html'});
    res.end(JSON.stringify({message:"Server error"}));
   //send text to the client
   //res.write('hello');
   //res.end('<h1>Hello</h1>');
});
server.listen(PORT, ()=>{
    console.log(`server running on port : ${PORT}`)
});