import {EventEmitter} from 'events';
import { join } from 'path';

//now this is great for custom events, listen for those events, or build in events

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log("hello " + name);
}
function goodbyHandler(name){
    console.log(`Goodbye ${name}`);
}
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyHandler);

//emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye');

myEmitter.emit('greet','john');
myEmitter.emit('goodbye','john');

//error handling
myEmitter.on('error',(err)=>{
    console.log('An error has occured:',err);  
});

//simulate error
//myEmitter.emit('error',new Error('Soemthing went wrong'));
