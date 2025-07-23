<<<<<<< HEAD
// Promise.All

function api1(){
    return new Promise ((res,rej) =>{
        setTimeout(() => {
            res("api1")
        }, 4000);
    });
}

function api2(){
    return new Promise((res,rej) =>{
        setTimeout( () =>{
            res('api2')
        },7000)
    });
}

function api3 (){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res("api3")
        }, 2000);
    });
}

let x= Promise.all([api1(),api2(),api3()]).then(data =>{
    console.log(data);
});


// Promise.allsetted

function api1(){
    return new Promise ((res,rej) =>{
        setTimeout(() => {
            res("api1")                       
        }, 4000);
    });
}

function api2(){
    return new Promise((res,rej) =>{
        setTimeout( () =>{
            res('api2')
        },7000)
    });
}

function api3 (){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res("api3")
        }, 2000);
    });
}

let y= Promise.allSettled([api1(),api2(),api3()]).then(data =>{
    console.log(data);
});



=======
// Promise.All

function api1(){
    return new Promise ((res,rej) =>{
        setTimeout(() => {
            res("api1")
        }, 4000);
    });
}

function api2(){
    return new Promise((res,rej) =>{
        setTimeout( () =>{
            res('api2')
        },7000)
    });
}

function api3 (){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res("api3")
        }, 2000);
    });
}

let x= Promise.all([api1(),api2(),api3()]).then(data =>{
    console.log(data);
});


// Promise.allsetted

function api1(){
    return new Promise ((res,rej) =>{
        setTimeout(() => {
            res("api1")                       
        }, 4000);
    });
}

function api2(){
    return new Promise((res,rej) =>{
        setTimeout( () =>{
            res('api2')
        },7000)
    });
}

function api3 (){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res("api3")
        }, 2000);
    });
}

let y= Promise.allSettled([api1(),api2(),api3()]).then(data =>{
    console.log(data);
});
>>>>>>> 4e94e0785104f1b631caf257dd4f80ba14e5ce0a
