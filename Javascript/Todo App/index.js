let todoInput = document.getElementById('todoInput');
 // function removeTodo(id){
   // let div = document.getElementById(id)
     // div.remove();
// }
 // function markTodo(id){
  //  let div = document.getElementById(id)
 //   div.children[0].classList.toggle('completed')
// } 

// let id = 1;
// document.getElementById('addBtn').addEventListener('click' , (e) => {
  //  e.preventDefault();
 //   let todoval = todoInput.value
  //  let div = document.createElement('div')
 //   div.setAttribute('class' , 'singleTodo')
   // div.setAttribute('id' , id)
   // div.innerHTML = `
   // <h2>${todoval}</h2>
     //           <input type="checkbox" id="" onclick=markTodo(${id})>
       //         <button onclick=removeTodo(${id})>Remove Todo</button>
     // `
    // console.log(div);
   // document.getElementById('allTodo').appendChild(div)
   // id++;
   // todoInput.value = ''
// })

// With local storage

let data = JSON.parse(localStorage.getItem('allTodo')) || [];
 // let arr = [];
 function displayTodo(){
  document.getElementById('allTodo').innerHtml= "";
  data.map((singleTodo , id) =>{
    todoStructure(singleTodo , id);
  });
 }

 function todoStructure(singleTodo , id){
    let div = document.createElement('div')
    div.setAttribute('class' , 'singleTodo')
  //  div.setAttribute('id' , id)
    div.innerHTML = `
    <h2>${singleTodo.todoval}</h2>
                <input type="checkbox" id="" >
                <button >Remove Todo</button>
    `;

    let btn = div.getElementsByTagName('button')
    let inp = div.getElementsByTagName('input')
    let h2 = div.getElementsByTagName("h2")

    btn[0].addEventListener('click' , (e) =>{
       e.target.parentNode.remove();
       removeTodo(id);
    });
    if (singleTodo.completed){
      h2[0].classList.toggle("completed");
      inp[0].setAttribute("checked" , true);
    }

    inp[0].addEventListener('click' , (e) =>{
     //   e.target.previousElementSibling.classList.toggle('completed')
     toggleTodo(id);

    });
   document.getElementById('allTodo').appendChild(div)
 }
document.getElementById('addBtn').addEventListener('click' , (e) => {
    e.preventDefault();

    let todoval = todoInput.value
   // arr.push(todoval)
   if (todoval === ''){
    alert('Input field is empty')
    return;
   }
   data.push({todoval, completed : false})
localStorage.setItem('allTodo' , JSON.stringify(data));
 displayTodo();
   todoInput.value = ''
});

function removeTodo(id){
  data.splice(id , 1);
  localStorage.setItem('allTodo' , JSON.stringify(data))
 displayTodo();
}

function toggleTodo(id){
  data[id].completed = !data[id].completed;
    localStorage.setItem('allTodo' , JSON.stringify(data));
 displayTodo();
}
 displayTodo();


