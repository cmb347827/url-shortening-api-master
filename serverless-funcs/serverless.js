
//is a function that's put on the handler property of the exports object
exports.handler=function(event,context,callback){
    //context, is going to be identity information , keys , authentication etc

    //callback includes response object, the first thing is going to be error object, null if no error
    //make sure body in response object is json
    callback(null,{
       statusCode:200,
       body:JSON.stringify({msg:"response text"})
    });
}