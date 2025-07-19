const TicTac = document.querySelector('.TicTac')
const boxes = document.querySelectorAll('.box')
const h1 = document.getElementsByTagName('h1')
const restart = document.getElementById('restart')
console.log(h1);
let currentPlayer = "X";
let count = 0;

let winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function startGame(e) {
 // console.log(e.target);
 if(e.target.classname !== 'TicTac'){
if (e.target.innerText === ""){
e.target.textContent = currentPlayer;
count++;
winner();
currentPlayer = currentPlayer === "X" ? "O" : "X"
 }
if (count === 9){
      h1[0].innerText = `Match Draw`;
}

}
  //console.log('count');
}
 
TicTac.addEventListener('click' , startGame)
 

function winner() {
    winningCondition.forEach((item) =>{
        let index0 = item[0];
        let index1 = item[1];
        let index2 = item[2];
            // console.log(index1 , index0 , index2);
            let val0 = boxes[index0].innerHTML;
            let val1 = boxes[index1].innerHTML;
            let val2 = boxes[index2].innerHTML;

            if (val0 !== '' && val1 !== '' && val2 !== ''){
                if( val0 === val1 && val0 === val2){
                    boxes[index0].classList.add('winnerClass');
                        boxes[index1].classList.add('winnerClass');
                            boxes[index2].classList.add('winnerClass');
                    count=0;
                    h1[0].innerText = `Winner is ${val1}`
                  //  console.log('winner is' , val0);
                  TicTac.removeEventListener('click' , startGame )

            
                }
            }
        
    })
    
}

restart.addEventListener('dblclick' , () =>{
    currentPlayer = 'X';
    h1[0].innerText = "TIC TAC TOE"
boxes.forEach(item => {
    item.classList.remove('winnerClass')
    item.innerText = '';
});
TicTac.addEventListener('click' , startGame)
}
);