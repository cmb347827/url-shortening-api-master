

//set and get  Set-ExecutionPolicy Unrestricted / Restricted
//Set-ExecutionPolicy -scope CurrentUser Unrestricted /RemoteSigned
//node -v , npm -v (in cmd prompt)
//99% of the time the first thing to do when starting a new node.js project, is to create a package.json file
// so to do that , is by a : npm init command in terminal.
//index.js (ook wel app.js or server.jsn), node . , node index, node index.js  runs by these cmd in terminal
//there's no browser so no window object. there is console.log(global), part of web api in browser.
// No document object.

// npm scripts, npm modules: install one called nodemon ,because it's pain in the ass keep restarting server,
// added in package.json scripts 'start' line 9, can now run 'npm start' cmd in terminal.
//if  scripts 'dev' line instead do 'npm run dev'.
//npm install nodemon , install it as a 'dev dependency' , which are dependencies which are not needed for production environment
//so : npm install -D nodemon


//common js
//const {generateRandomNumber,celciusToFahrenHeit} = require('./utilities');
//common.js 
//console.log(`Randome nr: ${generateRandomNumber()}`);
//console.log(`Fahrenheit: ${celciusToFahrenHeit(45)}`);

//e6 modules.
//import {allPosts} from './utilities.js';

//console.log(allPosts());     
