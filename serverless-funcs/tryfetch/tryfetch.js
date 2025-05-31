//let url='./.netlify/functions/try-fetch

import fetch from 'node-fetch';

//const fetch = require('node-fetch');
//make fetch-dependencies folder it's own npm depository , add dependencies into it.
//cd in terminal into the fetch-dependencies folder : cd serverless-funcs/fetch-depencencies
//npm init -y
//npm i node-fetch



exports.handler=async function(event,context,callback){
      //let url='https://api.github.com/users/octocat/repos?type=owner';
      //let url ='https://raw.githubusercontent.com/cmb347827/static-job-listings-master/refs/heads/main/data.json';
     let url="https://cleanuri.com/api/v1/shorten";
     
     
     let res = await fetch(url);
     let data = await res.json();
     
     
     callback(null,{
       statusCode:200,
       body:JSON.stringify({msg:`api response text: ${data.toString()}`}),
       
    });
   
  
};