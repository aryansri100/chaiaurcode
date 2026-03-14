const arr=[1,2,3,4,5]
for (const i of arr) {
  //  console.log(i);
}

const map=new Map()       //only unnique values in map
map.set('IN','INDIA');
map.set('FR','FRANCE');
console.log(map)

for (const [key,value] of map) { //put [] to print key and values individually 
// otherwise they will print whole as one also this for of only works for maps and not objects
    console.log(key);
    console.log(value)
}
const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for (const key in myobj) {//for in is used for objects
  
    console.log(key);
    
}