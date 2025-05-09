console.log(process);

//global ojbect, no need to import it
//see process.env 
//argv property , is an array, has two things in it by default: path to node.js , path to current file.
//but if u add arguements in cmd line, can access those from there as well. command line interfaces.

console.log(process.argv[0]);

//system 
console.log(process.env);
console.log(process.env.COMPUTERNAME);


//id of the node.js process
console.log(process.pid);


//current working directory
console.log(process.cwd());

//title node.js process
console.log(process.title);

//memoryUsage()
console.log(process.memoryUsage());

//uptime()
console.log(process.uptime());

process.on('exit',(code)=>{
   console.log(`About to exit with code: ${code}`);
});

//exit() the process
process.exit(0);