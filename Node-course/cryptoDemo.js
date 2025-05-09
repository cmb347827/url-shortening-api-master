//provides cryptographical functionality, create hashes , random hex strings , encrypt/decrypt data
import crypto from 'crypto';

//createHash()
const hash = crypto.createHash('sha256');  //takes algorithm you want to use
hash.update('password1234');
console.log('hash digest:',hash.digest('hex'));     //gets the hash  


//generate cryptographically strong data or hex string 
crypto.randomBytes(16,(err,buf)=>{
    if(err){
        throw err;
    }
    console.log('Random:',buf.toString('hex'));
});


//encrypting/decrypting data, do that by creating cypher text , which is encrypted data.
//using cryptographic algorithm and keys
//createCipheriv & createDecipheriv
//go to docs see different algorithms that are available
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher =crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update('Hello this is the secret message','utf8','hex');
encrypted +=cipher.final('hex');   //in order to encrypt use the final method.
console.log('encrypted:',encrypted);

//to decrypt , use createDecipher
const decipher =crypto.createDecipheriv(algorithm,key,iv);
let decrypted = decipher.update(encrypted,'hex','utf8');
decrypted +=decipher.final('utf8');   //in order to encrypt use the final method.
console.log('decrypted:',decrypted);