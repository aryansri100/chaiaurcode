//singleton->made by constructors
//Object.create()->constructor method
const mysym=Symbol("key1");
const Jsuser={
    name:"hitesh",
    [mysym]:"mykey1", //if we do not use [] then also it will print the value on 
    // accessing mysym but it's datatype will be string and not symbol
    age:18,
    location:"allahabad"
}
//behind the scenes the keys are also converted into string
console.log(Jsuser.location);
console.log(Jsuser["location"]);
console.log(Jsuser[mysym]);//this is how you access symbol and not by . operator
Jsuser.age=21//this is how you change the values;
//Object.freeze(Jsuser)//now you can't do any chnage is Jsuser
Jsuser.greeting=function(){
    console.log("Hello")
}
Jsuser.greetingtwo=function(){
    console.log(`Hello ${this.name}`) // prints the name this is used to tell the same object
}
console.log(Jsuser.greeting());//->this executes the function
console.log(Jsuser.greeting);//->this returns the reference of a function

const tinder=new Object();//this gives singelton object
const tindertwo={};//this gives non-singleton object

tindertwo.id="123"
tindertwo.name="Samay"
tindertwo.Isloggedin=false;

const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'c',
    4:'d'
}
const obj3={...obj1,...obj2}//this is used to combine objects

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseInstructor}=course
console.log(courseInstructor);