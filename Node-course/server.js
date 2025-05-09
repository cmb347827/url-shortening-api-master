//http module included with node.js, these are all core node.js modules no need to install.
import http from 'http';
//asynchronous version (non-blocking)
import fs from 'fs/promises';
import url from 'url';
import path from 'path';


//const PORT =8080;
//any dot after process.env can access variables in env file or in the system.
const PORT = process.env.PORT;

//get currentpath
const __filename= url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, ' , ', __dirname);


const server = http.createServer(async (req,res)=>{
    //res.setHeader('Content-Type','text/html');
    //res.statusCode=404;
    try{
       //check if GET request
        if(req.method==='GET'){
            let filePath;
            //test in http://localhost:8000/about etc  (see browser window)
            if(req.url==='/index'){
               // res.writeHead(200,{'Content-Type':'text/html'});
               //res.end('<h1>Homepage</h1>');
               filePath= path.join(__dirname, 'public','index.html');
            }else if(req.url==='/about'){
               //res.writeHead(200,{'Content-Type':'text/html'});
               //res.end('<h1>About</h1>');
               filePath= path.join(__dirname, 'public','about.html');
            }else{
               //res.writeHead(404,{'Content-Type':'application/json'});
               //res.end(JSON.stringify({message:"Page not found"}));
               //could create not found page, but will just throw a 'Not found' error.
               throw new Error('Not found');
            }
            const DATA = await fs.readFile(filePath);
            res.setHeader('Content-Type','text/html');
            res.write(DATA);
            res.end();
        }else{
          throw new Error("Method not allowed");
        }
    }catch(error){
        //500 is server error
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.end(`Server error: ${error}`);
    }
   //send text to the client
   //res.write('hello');
   //res.end('<h1>Hello</h1>');
   
   console.log(req.method);
});
server.listen(PORT, ()=>{
    console.log(`server running on port : ${PORT}`);
    console.log('testing');
});