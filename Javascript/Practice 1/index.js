
// Basic
 a= 'himmaaa'
 g = 'grass'
console.log(a, g) 

// OBLECT
const himsashu = {
    name: 'Himma',
    Id : '119 ', 
}
console.log(himsashu);


//let
let str = 'babe';
console.log(str);

// Operators 
let x = 8;
x -= 4;           // 8-4
console.log(x);


// If else
    let age = prompt('Enter age');
if (age >=18) {
    console.log('Eligible'); 
}
 else{
        console.log('Not eligible');
    }

    // Switch
    let exp = '-';
    const num1 = 3;
    const num2 = 4;
    switch(exp){
        case ('+') : console.log(num1 + num2);
        break;
        case('-'): console.log(num1-num2);    
    break;
    default : console.log(Invalid);

}

//loop
for( let i =0 ; i<=7 ;i++){
    if (i==4)
        continue;
    console.log(i);
}

//Function
function addd() {
    console.log(5+7);
}
addd();

// Function with parameters
function add(par1 , par2 , name) {
    let sum = par1 + par2;
    console.log(sum , name)
}
add(3,4 ,"Himani");
add(3,7 ,"Sid");


// Function using return
function add(par1 , par2 , name) {
    let sum = par1 + par2;
    return sum ;
}
console.log(add(3,4 , "Himani")); 
add(3,7 , "Sid");

//Nummbers
let nom =200;
console.log(nom.toFixed(3));      // 200.000

//string
let strn = 'HEEELOO';
console.log(strn.replace('EEE' , 'eee'));

//MATH
console.log(Math.max(3,4,5));
console.log(Math.floor(4.555));
console.log(Math.abs(-7));         // convert -ve to +ve or vice versa

console.log(Math.random());  //gives any random value

let max =  10;
let min = 4;
let randomnum = Math.floor(Math.random()* (max-min +1) ) + min;
console.log(randomnum);

//Date
let date = new Date();
console.log(date.getTime());  // in ms


let datee = new Date();
console.log(datee.toTimeString());  // shows time ist

let dat = new Date();
console.log(dat.toLocaleString()); //Shows time and date


//arr 
let arr = [ 2,4,6,7];
console.log(arr[2]);

//push
let arrr = [3,4,6,7];
//arrr.push(40);
let newarr = arrr.concat(30,20,10);  //concat
console.log(newarr);

let arry = [9,6,4,2];      // remove array from front  [6,4,2]
arry.shift(1);
console.log(arry);

//slice - gives desired number within range
let arre = [3,5,2,7,8];
let newar =  arre.slice(1,4);    //[5,2,7]  //last index not included
console.log(newar);

//splice 
let arri = [3,5,2,7,8];
let newarrr =  arri.splice(1,4);    //[5,2,7,8]  //last index also included
console.log(newarrr);

//Print array using for loop
let ar = [3,2,4,5,6];
for(i=0;i<ar.length;i++){
    console.log(ar[i]);
}

// Destructuring 
let a = [3,8,9,4];
let [first , second , third, fourth]= a  
console.log(second);     //print  8


//Object
const obj = {
    name: 'Himani',
    roll: 119,
    section: 'B',
    course:'Btech cse'
}
console.log(obj.course);

// back tick ES6  ( Template literal)
let stri = 'Himmaa'
console.log(`${stri} ji`);