import fs from 'fs';
import {createServer } from 'http';

const logger= (req,res,next)=>{
    console.log(`req.url : ${req.url}, res.method: ${res.method}`);
    next();
};
const writeFileMiddleware =((req,res,next)=>{
    console.log(`in write`);
});

const server = createServer((req,res)=>{
     logger(req,res, ()=>{
          console.log(`req.url : ${req.url}`);
          writeFileMiddleware(req,res,()=>{
              
          });
     });
         
});
