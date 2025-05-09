//import fs from 'fs';


//readFile() callback version (asynchronous)
/*fs.readFile('./Node-course/test.txt', 'utf8', (err,data)=>{
    //synchronous callback.
    if(err){
       console.log('err',err);
       throw err;
    }
    console.log('The data',data);
});

//readFileSync() synchronous version (blocking)
const data=fs.readFileSync('./Node-course/test.txt','utf8');
console.log('sync data',data);
*/


import fs from 'fs/promises';
//readFile() promise version
fs.readFile('./Node-course/test.txt','utf8')
    .then((data)=>console.log('promises',data))
    .catch((err)=>console.log(err));


//readFile()  async/await version
const readFile=async()=>{
    try{
      const data= await fs.readFile('./Node-course/test.txt','utf8');
      console.log('async data',data);
    }catch(error){
        console.log('error',error);
    }
};
readFile();

//writeFile() async/await version , always going to overwrite text.
const writeFile=async()=>{
    try{
      await fs.writeFile('./Node-course/test.txt','text to write to file');
    }catch(error){
        console.log('error',error);
    }
};
writeFile();


//appendFile() 
const appendFile=async()=>{
    try{
      await fs.appendFile('./Node-course/test.txt','\n \n This is appended');
    }catch(error){
        console.log('error',error);
    }
};
appendFile();

