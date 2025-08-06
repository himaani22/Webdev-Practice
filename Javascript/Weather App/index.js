const btn = document.getElementById("searchBtn")
const cityname = document.getElementById("cityname")
const apikey = '33541964b5eaf8c200e89b9580195833'

async function fetchDatabyCity(city) {
    try {
  cityname.value = '';
 console.log("city name" , city);
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    let result = await res.json();
    console.log(result);
    if(result.message){
        document.getElementById('secondDiv').innerHTML = `<h1>${city} ${result.message}</h1>`;
    };
    displayWeather(result);

    } catch (err) {
        console.log(err.message);
    }
   
}

async function fetchDatabyCoordinates(lati , longi) {
    try {
        console.log(lati , longi);
  cityname.value = '';
 
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apikey}&units=metric`)
    let result = await res.json();
    console.log(result);
    if(result.message){
        document.getElementById('secondDiv').innerHTML = `<h1>${city} ${result.message}</h1>`;
    };
    displayWeather(result);

    } catch (err) {
        console.log(err.message);
    }
   
}
btn.addEventListener('click' , () => {
fetchDatabyCity(cityname.value)
});
function displayWeather({name , main , wind, weather}){
div = `
<div id="weatherInfo">
<p id="temp">${main.temp}°C</p>
<p class = "desc">${weather[0].description}°C</p>
<img src = 'https://api.openweathermap.org/img/w/${weather[0].icon}.png'>
<p id="city">${name}</p>
<div class="otherInfo">
    <div class="wind">
        <p>Wind</p>
        <p>${wind.speed}m/s</p>
    </div>
    <div class="wind">
        <p>Pressure</p>
        <p>${main.pressure}pa</p>
    </div>
    <div class="wind">
        <p>Humidity</p>
        <p>${main.humidity}%</p>
    </div>
</div>
</div>
`;
document.getElementById('secondDiv').innerHTML = div;
}

document.getElementById('Cloc').addEventListener('click', () =>{
    navigator.geolocation.getCurrentPosition((position) =>{
        let lati = position.coords.latitude
        let longi = position.coords.longitude
        fetchDatabyCoordinates(lati,longi);
    })
})