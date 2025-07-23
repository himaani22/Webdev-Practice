async function api(num1 , num2) {
    try {
        let response = await fetch (
      //      `https://apicodethread.cyclic.app/sum?a=${num1}&b=${num2}`
        );
        let result = await response.json();
        document.getElementById("Total").innerHTML = result.sum
    } catch (err) {
        console.log(err);
    }
}

document.getElementById("btn").addEventListener('click' , () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("Total").innerHTML = Number(num1) + Number(num2)
    api(num1 , num2)
}
)
