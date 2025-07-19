const btn = document.getElementById('genPass')
const newPass = document.getElementById('newPass')
const slider = document.getElementById('range')
const rangeVal = document.getElementById('rangeVal')

const UpperCase = document.getElementById('capLet');
const LowerCase = document.getElementById('samLet');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');

const copyBtn = document.getElementById('copyBtn')

rangeVal.innerText = slider.value

slider.addEventListener('input' , (e) =>{
    rangeVal.innerText = e.target.value
})


btn.addEventListener('click' , ()=>{
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let synbolstr = '@!#$%^&*_';
    let finalStr = '';

    if (UpperCase.checked){
        finalStr += capitalLetter;
    }
    if (LowerCase.checked){
        finalStr += smallLetter;
        }
        if (number.checked){
            finalStr += numberStr;
        }
        if (symbol.checked){
            finalStr += synbolstr;
        }
        if(finalStr === ''){
            alert('Pleasr select at least one option')
        }
        

    // let finalStr = capitalLetter + smallLetter + numberStr + synbolstr ;
    let latestPass = '';
    
    for (let i=0 ; i<slider.value ; i++)
    {
        let randNum = Math.floor(Math.random() * finalStr.length)
       // latestPass += finalStr[randNum];
       latestPass += finalStr.charAt(randNum)
    }  


    newPass.innerText = `${latestPass}`;
})

copyBtn.addEventListener('click' ,() =>{
    window.navigator.clipboard.writeText(newPass.innerText)
})