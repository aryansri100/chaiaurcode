function addTwoNumber(number1,number2){
console.log(number1+number2);
}
addTwoNumber(3,4);
//const result=addTwoNumber(5,6)//->this will give undefined because the function is doing console
//and not returning the number

function calculateCartPrice(...num1){// we use ... this operator called rest operator if we are not sure how many arguments are going to be passed like in shopping cart we don't know 
// how many items user will buy
    return num1
}

console.log(calculateCartPrice(200,400,500))

const user={
    username:"hitesh",
    price:199
}
const newArray=[200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1];
}