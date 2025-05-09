import path from 'path';
import url from 'url';

//not a real location ,just used to test different locations
const filePath = './dir1/dir2/test.txt';

//basename()
console.log(path.basename(filePath));


//dirname()
console.log(path.dirname(filePath));


//extname()
console.log(path.extname(filePath));


//parse()
console.log(path.parse(filePath));


const __filename= url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('1:',__filename, ' , ', __dirname);    

//join() needed becasue of different operating system different delimters
const filePath2 = path.join(__dirname,'dir1','dir2','test.txt');
console.log('2:',filePath2);


//resolve() basically the same as join() except there's always an absoute path.
const filePath3 = path.resolve(__dirname,'dir1','dir2','test.txt');
console.log('3:',filePath3);