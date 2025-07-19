function sum (a,b,c){
    let sum = a+b+c;
    console.log(sum);
}
sum(4,5,6);

//rest operator
function summ (...num){
   //  console.log(...num);   print num ie 4,5,6
  //  console.log(num[2]);        //print 6

  let total = num[0] +num[1]+num[2] ;  //Add
  console.log(total);
}
summ(4,5,6);


//remaining values
function addd(a,...num){
    let sumof = num[0]+num[1];
    console.log(sumof);
}
addd(2,4,5);


let obj ={
 name: 'Sidd',
 id: 543,
 Description: 'Love'
}
function obj1({name, id , description}) {       
//   console.log(id);          //These are use to get a particular value
let tagArray = name.split(",")
console.log(tagArray);
}
obj1(obj); 


//Callback funcion - takes func as argument
let arr = [3,2,1,4,5,]
arr.forEach(function(val){
    val += 5;
    console.log(val);
})

// Arrow func
let arry = [3,2,6,5]
const hello = (arry) => {
    console.log(arry);
}
hello(arry);

//Map
let a = [2,1,3,4];
const newarray = a.map(function(val){
    val += 1
    return val;
})
console.log(newarray);

//Filter
let arre = [1,2,3,4,5];
const newar =arre.filter((val) => {
    if (val <=4)
        return val;
})
console.log(newar);

//reduce
let ar = [3,6,7,5]
const newa = ar.reduce((acc, cur) => {
    acc = acc+ cur;
    return acc;
} ,0)
console.log(newa);

//loop
var names = 'Webdev';
for (i=0;i<=10;i++){
    console.log(`${names} ${i}`)
}

//function
function fun1(){
    return{ name:'himma' , id :119}
}
console.log(fun1());

// arror function
const name = 'Baby';
var func1 = ( )=> {
      return{ name:'himma' , id :119}
}
 console.log(func1());

// function execution   (Not used)
var fun2 = function (){
     return{ name:'himma' , id :119}
}
console.log(fun2());


// CallBack function
function one(fn){
    console.log('Hello1');
    fn();
}                                          // prints both Hello 1 and hello 2
function two(){
        console.log('Hello 2');
    }
one(two); 


// Closures
function counter(){
 let count = 0;
return function(){
   return ++count;
}
}
const increment = counter();
console.log(increment());