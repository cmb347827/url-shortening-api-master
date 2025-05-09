const generateRandomNumber=()=>{
    return Math.floor(Math.random() * 100 + 1);
}
const celciusToFahrenHeit =(celcius)=>{
    return (celcius /9*5 +32);
}
//common.js (older)
//single export
//module.exports = generateRandomNumber;
/*module.exports={
    generateRandomNumber,
    celciusToFahrenHeit,
}*/

//for es6 modules (import export syntax), set type:'module' in package.json

/*const posts=[
    {
        id:1, title:'post-one'
    },
    {
        id:2, title:'post-two'
    }
];

const allPosts=()=>posts;

export { allPosts};*/
