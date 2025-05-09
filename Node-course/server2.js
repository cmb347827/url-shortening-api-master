import http from 'http';     //dit was nodig, ook zonder http:createServer.

import {createServer } from 'http';

const PORT = process.env.PORT;

const users=[
    {id:1,name:"John Doe"},
    {id:2,name:"Jane Doe"},
    {id:3,name:"Jim Doe"}
];

//logger middleware
const logger = (req,res,next)=>{
    console.log(`req method: ${req.method}  req url: ${req.url}`);
    //since it's middleware use the next() function to call the next middleware.
    next();
};
//json middleware
const jsonMiddleware= (req,res,next)=>{
    res.setHeader('Content-Type','application/json');
    next();
};
//more code cleanup, route handler for GET/ api/users.
const getUserHandler =(req,res)=>{
    res.write(JSON.stringify(users));
    res.end();
};
//route handler for GET/ api/users/id
const getUserByIdHandler =(req,res)=>{
    const id= req.url.split('/')[3];
    const user= users.find((user)=>user.id===parseInt(id));
    if(user){
        res.write(JSON.stringify(user));
    }else{
        res.statusCode=404;
        //with express you can just pass your js object right in there like so: res.json({...})  instead of using stringify.
        res.write(JSON.stringify({Message:"User not found"}));
    }
    res.end(); 
};
//not found handler
const notFoundHandler =(req,res)=>{
    res.statusCode=404;
    res.write(JSON.stringify({Message:"Route not found"}));
    res.end();
};
//Route handler for POST /api/users (so can add users)
const createUserHandler=(req,res)=>{
     let body='';
     //listen for data
     req.on('data',(chunk)=>{
        body+=chunk.toString();
     });
     req.on('end',()=>{
        const newUser = JSON.parse(body);
        //in reality would be added to database
        users.push(newUser);
        //201 means successful that something was created.
        res.statusCode=201;
        res.write(JSON.stringify(newUser));
        res.end();
     });
};


//this is the beginning of rest api, messy code as it is just the http module, normally use a framework.
//now no http.createServer needed as it's imported (see server.js)
const server = createServer((req,res)=>{
    //to use the logger , run it , and wrap in a callback(createserver)
    logger(req,res,()=>{
        //code from before adding the middleware and handlers (not the logger middleware function)
        /*if(req.url === '/api/users' && (req.method ==='GET')){
            //http:localhost:8000/api/users
            res.setHeader('Content-Type','application/json');
            //with express you can just pass your js object right in there like so: res.json({...})  instead of using stringify.
            res.write(JSON.stringify(users));
            res.end();
        }else if(req.url.match(/\/api\/users\/([0-9]+)/) && (req.method==='GET')){
            //http://localhost:8000/api/users/1  http://localhost:8000/api/users/2  etc
            const id= req.url.split('/')[3];
            const user= users.find((user)=>user.id===parseInt(id));
            res.setHeader('Content-Type','application/json');
            if(user){
                res.write(JSON.stringify(user));
            }else{
                res.statusCode=404;
                //with express you can just pass your js object right in there like so: res.json({...})  instead of using stringify.
                res.write(JSON.stringify({Message:"User not found"}));
            }
            res.end();   //1:10:32
            //res.write(JSON.stringify({id:1,Name:"John doe"}));
        } else{
            res.setHeader('Content-Type','application/json');
            res.statusCode=404;
            //with express you can just pass your js object right in there like so: res.json({...})  instead of using stringify.
            res.write(JSON.stringify({Message:"Route not found"}));
            res.end();
        }*/
        jsonMiddleware(req,res,()=>{
            if(req.url === '/api/users' && (req.method ==='GET')){
                getUserHandler(req,res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && (req.method==='GET')){
                getUserByIdHandler(req,res);
            }else if(req.url==='/api/users' && (req.method==='POST')){
                //just in memory
                createUserHandler(req,res);
            }else{
                notFoundHandler(req,res); 
            }
        })
    });
    
});

server.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`);
});