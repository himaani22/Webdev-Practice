let emoji = document.getElementById('emoji')
let des = document.getElementById('des')
let result ;
async function fetchEmoji()
 {
    let res = await fetch(`https://emoji-api.com/emojis?access_key=0d76b664883dc139da6d94b44d30a1629cdd94e3`)
     result = await res.json()
    console.log(result[0]);
}
fetchEmoji();

emoji.addEventListener('click' , () => {
    let randNum = Math.floor(Math.random() * result.length)
    let description  = result[randNum].unicodeName.split('.')
    let des2 = description[1].substring(2,description[1].length)
    emoji.innerHTML = result[randNum].character
    des.innerHTML = des2
})