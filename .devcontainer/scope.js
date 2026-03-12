addone(5);//this can be done we can call function before declaration because here we are only declaring
function addone(num){
    return num+1;
}
addtwo(5)//this can't be done because here are also assigning along with declaring
const addtwo=function(num){
    return num+2;
}