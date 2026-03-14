(function chai(){
    console.log(`DB CONNECTED`);
})();//IN IIFE FUNCTION ALWAYS PUT; TO END THE FUNCTION

((name)=>{
console.log(`DB connected${name}`)
})('hitesh')