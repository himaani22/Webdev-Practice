console.log('start');
const promise1 = new Promise (function fun1 (resolve , reject) {
// console.log('Inside promise');
resolve("Promise accepted")
});
console.log(promise1);
console.log('end'); 


//Onfulfillment ( .then)
const promise2 = new Promise (function fun1 (resolve , reject) {
resolve("Promise accepted")
}).then(function success(result){
    console.log(result);
});

//Onrejected 
const  promise3 = new Promise(function fun1 (resolve,reject){
    reject("Promise rejected");
}).then(function success(result){
    console.log(result);
},
function rej(err){
    console.log(err);
}
);


//eg
function isData (item) {
const promise3 = new Promise (function fun1 (resolve , reject){
    setTimeout(function timer1(){
 if (item) {
        resolve('Promise accepted')
    }else {
        reject('Promise rejected')
    }
    },4000);
   
});
return promise3;
}
let result = isData('Siddarth');
setTimeout(function timer2(){
console.log("Settimeout");
},6000)
result.then(function success(result){
    console.log(result);
});
console.log("end");



//Lecture 42
let p = new Promise(function (res,rej){
res('Promise resolved')
})
p.then(data => {
console.log(data);       // In this step the promise func gets consumed
}
);


//Food list through Promise function
function searchfood (item){
    return new Promise (function fun1(res,rej){
        console.log('Searching start for' , item , '....');
        setTimeout(function timer1(){
            let data = `List of ${item}`;
            res ({item , data});
        },2000);
    })
}

function orderfood (item){
    return new Promise (function fun2 (res,rej){
        console.log('Select ',item);
        setTimeout(function timer2(){
let id = Math.floor(Math.random() * 999999)
res ({id ,});
        },4000);
    })
}

function payment (item , id){
    return new Promise (function fun3(res , rej){
        console.log(`Payment started for ${item} with id number:`, id);
        setTimeout(function timer3(){
            let status = 'True'
            res (status);
        }, 3000);
    })
}
let resultt = searchfood("Pizza")
 .then(function consume1 (detail){
       console.log(detail.data);
       return orderfood(detail.item);
 })
 .then(function consume2(detail2){
    console.log('Order created successfully with ID number :' , detail2.id );
    return payment (detail2.item , detail2.id)
 })
.then(function consume3(status){
     console.log('Payment successful with status:' , status);
})
    
    // console.log('Order:' , order)

    
 
// })
// console.log(resultt);

// let order = orderfood(item.item).then(function consume2(id){
 //       console.log('Order created successfully with ID number :' , id );
 //       payment(item.item , id).then(function consume3(status){
 //           console.log('Payment successful with status:' , status);
 //       })
//    });