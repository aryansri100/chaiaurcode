const user={
    username:"hitesh",
    price:999,

  welcomeMsg:function(){
    console.log(`${this.username},welcome to website`)// this->refers to current context
  }
}

const chai=()=>{
    let username="hitesh"
    console.log(this)
}
chai();
//const addTwo=(num1,num2)=>{
  //  return num1+num2
//}
const addTwo=(num1,num2)=>(num1+num2)//this also works but if we use {} then will 
// have to use return