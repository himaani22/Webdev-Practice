// document.getElementById("btn").addEventListener("click" , () => {
 //    localStorage.getItem("store")
//   localStorage.removeItem("store")
// localstorage.clear()              all local storage clear
   
//  });


// document.getElementById("in").addEventListener("input" ,(e) =>{
/// console.log(e.target.value);
// localStorage.setItem("Heya" , e.target.value)
// document.getElementById('h1').innerText = localStorage.getItem("Heya")

// })


document.getElementById("btn").addEventListener("click" ,(e) =>{
    let name = document.getElementById('name').value
    let rollno = document.getElementById('rollno').value
    localStorage.setItem('data' , JSON.stringify({name: name , rollnumber : rollno}))
    document.getElementById('h1').innerText =JSON.parse( localStorage.getItem('data')).name
    document.getElementById('h2').innerText= JSON.parse(localStorage.getItem('data')).rollnumber
});
document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name
document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).rollnumber