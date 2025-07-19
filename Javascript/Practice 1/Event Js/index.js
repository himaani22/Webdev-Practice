 // const btn = document.getElementById('btn')
// btn.onclick = () => {
   // console.log('Touch me touch me'); }



// mostly used
  // const btn = document.getElementById('btn')
 // const body = document.querySelector('body')
// btn.addEventListener('click' , () =>{
  //  console.log('Touch me touch me');
  //  body.style.backgroundColor='red'
 //   confirm('U wanna change color?')
 //   alert('WHO ARE U MANN')
// }) 


// Another method
// const btn = document.getElementById('btn')
// const body = document.querySelector('body')

 // btn.addEventListener('click' ,() => {
  //  const isChange = confirm('Uwanna change color?')
  //  if(isChange){
   //     const colorname = prompt('Which color')
   //     console.log('colorname');
   //     body.style.backgroundColor= `${colorname}`
 //   }
  //  console.log('Touch me touch me');
// })

const submit = document.getElementById('submit');
const colorName = document.getElementById('colorName');
 // const body = document.querySelector('body')
 let p = document.createElement("p")

colorName.addEventListener("input" , (e) => {
    e.preventDefault();
   // body.style.backgroundColor = `${colorName.value}`
 // console.log(colorName.value)
 
 p.innerText = colorName.value 
 document.body.appendChild(p)
})