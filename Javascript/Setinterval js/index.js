const body = document.getElementsByTagName('body');

function colorChange() {
let colorstring = '0123456789abcdef';              // Hexadecimal color
let color = "" ;
for (let i = 0 ; i < 6 ; i++){
    let randNum = Math.floor(Math.random() * colorstring.length ) 
   color = color + colorstring[randNum] }
   body[0].style.backgroundColor = `#${color}`
   
}
setInterval(colorChange , 1000);

 // body[0].style.backgroundColor = `#${color}`




 // ODERING BURGER 
 function searchFood (item , cb1){
    console.log("Searching for" , item , '....');
    setTimeout(function timer1(){
        let data = `list : ${item}`
        cb1(item ,data);
    },3000);
 }
    function orderFood (item , cb2){
        console.log('Select' , item);
        setTimeout(function timer2 (){
            let id = Math.floor(Math.random() * 999999 );
            cb2(id);
        },5000);
 }
 function payment(item ,id , cb3){
    console.log(`Payment started for ${item} with id number ` , id);
    setTimeout(function timer3(){
         let status = true;
         cb3(status);
    },7000);
 }


 let result = searchFood('Burger' , function fun1(item , data){
    console.log(data);
    orderFood(item , function fun2(orderId){
        console.log('Order created sucessfully with ID number', orderId);
        payment(item , orderId ,  function fun3(response){
        console.log('Payment done sucessfully with status:' , response);
        })
    });
});