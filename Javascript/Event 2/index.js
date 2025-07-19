 const mainDiv  = document.getElementById("mainDiv")
 const box = document.getElementById("div1")

 box.addEventListener('click' , () =>{
    console.log("Box");
 })

 mainDiv.addEventListener('click' , () => {
    console.log("main Div");
 })

 document.body.addEventListener("click" , () =>{
    console.log("body");
 })