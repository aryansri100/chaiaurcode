const coding=["js","ruby","java","python","cpp"]

coding.forEach(function(val){
    console.log(val)
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const arr=[
    {
        language:'javascript',
        filename:'js'
    },
    {
         language:'python',
        filename:'py'
    }
]
arr.forEach(function(obj){
console.log(obj.filename)                 //forEach is used to iterate along objects stored in array
})
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=>num>4)
//console.log(newNums);

const newNums=[];
myNums.forEach((num)=>{
    if(num>4)
        newNums.push(4);
})
console.log(newNums)