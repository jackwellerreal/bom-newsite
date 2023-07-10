setWeather();

const time = moment();
const currentTime = time.format("HH:ss, dddd D MMMM");

document.getElementById("today-time").innerHTML = currentTime;
document.getElementById("today-city").innerHTML = "Brisbane";

async function setWeather() {
    const weatherres = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=&q=Brisbane&aqi=no"
    );
    const weather = await weatherres.json();

    document.getElementById("today-temp").innerHTML = `${weather.current.temp_c}°C`;
}
